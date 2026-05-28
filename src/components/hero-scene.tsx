"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type AnimatedPanel = {
  group: THREE.Group;
  scan: THREE.Mesh;
  baseY: number;
  speed: number;
};

type DataPacket = {
  mesh: THREE.Mesh;
  offset: number;
  speed: number;
};

function roundedPlane(width: number, height: number, radius: number) {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return new THREE.ShapeGeometry(shape, 16);
}

function textTexture(label: string, subLabel: string, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = color;
  ctx.font = "700 44px Arial, sans-serif";
  ctx.fillText(label, 32, 86);
  ctx.fillStyle = "rgba(235, 243, 255, 0.78)";
  ctx.font = "400 25px Arial, sans-serif";
  ctx.fillText(subLabel, 32, 132);
  ctx.fillStyle = "rgba(235, 243, 255, 0.28)";
  for (let i = 0; i < 5; i += 1) {
    ctx.fillRect(32, 162 + i * 16, 280 + i * 22, 5);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addPanel(
  parent: THREE.Group,
  label: string,
  subLabel: string,
  color: string,
  x: number,
  z: number,
  rotationY: number,
) {
  const panel = new THREE.Group();
  panel.position.set(x, 0, z);
  panel.rotation.y = rotationY;

  const body = new THREE.Mesh(
    roundedPlane(1.18, 2.28, 0.08),
    new THREE.MeshBasicMaterial({
      color: "#10202b",
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  panel.add(body);

  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(roundedPlane(1.18, 2.28, 0.08)),
    new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.52,
    }),
  );
  edge.position.z = 0.004;
  panel.add(edge);

  const copy = new THREE.Mesh(
    new THREE.PlaneGeometry(0.98, 0.48),
    new THREE.MeshBasicMaterial({
      map: textTexture(label, subLabel, color),
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
    }),
  );
  copy.position.set(0, 0.72, 0.012);
  panel.add(copy);

  for (let i = 0; i < 4; i += 1) {
    const row = new THREE.Mesh(
      new THREE.PlaneGeometry(0.72 - i * 0.08, 0.028),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.34 - i * 0.04,
        depthWrite: false,
      }),
    );
    row.position.set(-0.06 + i * 0.025, 0.08 - i * 0.16, 0.014);
    panel.add(row);
  }

  const dataModule = new THREE.Mesh(
    roundedPlane(0.72, 0.42, 0.035),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.18,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  dataModule.position.set(0.02, -0.7, 0.014);
  panel.add(dataModule);

  const scan = new THREE.Mesh(
    new THREE.PlaneGeometry(1.05, 0.045),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    }),
  );
  scan.position.set(0, -0.98, 0.018);
  panel.add(scan);

  parent.add(panel);
  return {
    group: panel,
    scan,
    baseY: panel.position.y,
    speed: 0.75 + Math.random() * 0.28,
  };
}

function addOutputCard(
  parent: THREE.Group,
  label: string,
  color: string,
  x: number,
  y: number,
  z: number,
) {
  const card = new THREE.Group();
  card.position.set(x, y, z);
  card.rotation.set(-0.04, -0.2, 0.02);

  const body = new THREE.Mesh(
    roundedPlane(0.72, 0.38, 0.035),
    new THREE.MeshBasicMaterial({
      color: "#111827",
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  card.add(body);

  const edge = new THREE.LineSegments(
    new THREE.EdgesGeometry(roundedPlane(0.72, 0.38, 0.035)),
    new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.55,
    }),
  );
  edge.position.z = 0.006;
  card.add(edge);

  const texture = textTexture(label, "output", color);
  const copy = new THREE.Mesh(
    new THREE.PlaneGeometry(0.56, 0.18),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.82,
      depthWrite: false,
    }),
  );
  copy.position.set(-0.02, 0.02, 0.012);
  card.add(copy);

  parent.add(card);
  return card;
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0.35, 0.25, 5.25);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.setAttribute("role", "presentation");
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.x = 0.42;
    root.rotation.set(-0.04, -0.22, 0);
    scene.add(root);

    const panels: AnimatedPanel[] = [
      addPanel(root, "Research", "signals and demand", "#5eead4", -1.25, -0.15, 0.18),
      addPanel(root, "Notion", "knowledge base", "#f6c177", -0.18, 0.08, 0.04),
      addPanel(root, "Brand", "message system", "#ff7a90", 0.86, -0.08, -0.09),
      addPanel(root, "Website", "lead conversion", "#9db7ff", 1.84, -0.34, -0.2),
    ];

    const core = new THREE.Group();
    core.position.set(-2.14, -0.08, 0.12);
    root.add(core);

    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.36, 48, 48),
      new THREE.MeshBasicMaterial({
        color: "#e8fff9",
        transparent: true,
        opacity: 0.92,
      }),
    );
    core.add(coreSphere);

    const coreWire = new THREE.Mesh(
      new THREE.TorusGeometry(0.52, 0.008, 12, 96),
      new THREE.MeshBasicMaterial({
        color: "#5eead4",
        transparent: true,
        opacity: 0.72,
      }),
    );
    coreWire.rotation.x = Math.PI / 2.7;
    core.add(coreWire);

    const accentRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.006, 12, 96),
      new THREE.MeshBasicMaterial({
        color: "#f6c177",
        transparent: true,
        opacity: 0.46,
      }),
    );
    accentRing.rotation.y = Math.PI / 2.8;
    core.add(accentRing);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#5eead4",
      transparent: true,
      opacity: 0.5,
    });
    const connectorPoints = [
      new THREE.Vector3(-1.78, -0.08, 0.12),
      new THREE.Vector3(-1.25, 0.08, -0.1),
      new THREE.Vector3(-0.18, 0.02, 0.06),
      new THREE.Vector3(0.86, 0.0, -0.08),
      new THREE.Vector3(1.84, -0.08, -0.3),
    ];
    root.add(
      new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(connectorPoints),
        lineMaterial,
      ),
    );

    const connectorCurve = new THREE.CatmullRomCurve3(connectorPoints);
    const dataPackets: DataPacket[] = Array.from({ length: 7 }, (_, index) => {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.035 + (index % 2) * 0.012, 20, 20),
        new THREE.MeshBasicMaterial({
          color: index % 3 === 0 ? "#f6c177" : "#5eead4",
          transparent: true,
          opacity: 0.88,
        }),
      );
      root.add(mesh);
      return {
        mesh,
        offset: index / 7,
        speed: 0.08 + index * 0.004,
      };
    });

    const pulseNodes = connectorPoints.map((point, index) => {
      const node = new THREE.Mesh(
        new THREE.RingGeometry(0.055, 0.072, 32),
        new THREE.MeshBasicMaterial({
          color: index % 2 === 0 ? "#5eead4" : "#f6c177",
          transparent: true,
          opacity: 0.52,
          side: THREE.DoubleSide,
          depthWrite: false,
        }),
      );
      node.position.copy(point);
      node.rotation.x = Math.PI / 2.4;
      root.add(node);
      return node;
    });

    const outputCards = [
      addOutputCard(root, "SEO", "#5eead4", 2.46, 0.74, -0.6),
      addOutputCard(root, "SNS", "#ff7a90", 2.52, 0.2, -0.66),
      addOutputCard(root, "Lead", "#f6c177", 2.58, -0.34, -0.72),
    ];

    const floor = new THREE.Group();
    floor.position.y = -1.38;
    root.add(floor);
    for (let i = 0; i < 8; i += 1) {
      const y = i * 0.03;
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(-2.35, y, -0.1 - i * 0.12),
          new THREE.Vector3(2.4, y, -0.4 - i * 0.12),
        ]),
        new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? "#ff7a90" : "#5eead4",
          transparent: true,
          opacity: 0.35,
        }),
      );
      floor.add(line);
    }

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 5.4;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.7;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#f1f5f9",
        size: 0.018,
        transparent: true,
        opacity: 0.42,
      }),
    );
    root.add(particles);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0 };
    const handlePointer = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointer);

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = -0.22 + pointer.x * 0.07 + Math.sin(elapsed * 0.2) * 0.025;
      root.rotation.x = -0.04 - pointer.y * 0.035;
      core.rotation.y = elapsed * 0.55;
      core.rotation.z = Math.sin(elapsed * 0.5) * 0.05;
      particles.rotation.y = elapsed * 0.035;

      panels.forEach((panel, index) => {
        panel.group.position.y =
          panel.baseY + Math.sin(elapsed * panel.speed + index) * 0.045;
        panel.scan.position.y = -0.96 + ((elapsed * 0.42 + index * 0.22) % 1.82);
        const material = panel.scan.material;
        if (material instanceof THREE.MeshBasicMaterial) {
          material.opacity = 0.34 + Math.sin(elapsed * 2.1 + index) * 0.14;
        }
      });

      dataPackets.forEach((packet, index) => {
        const progress = (packet.offset + elapsed * packet.speed) % 1;
        const point = connectorCurve.getPointAt(progress);
        packet.mesh.position.copy(point);
        packet.mesh.scale.setScalar(0.78 + Math.sin(elapsed * 3 + index) * 0.18);
        const material = packet.mesh.material;
        if (material instanceof THREE.MeshBasicMaterial) {
          material.opacity = 0.52 + Math.sin(elapsed * 2.6 + index) * 0.3;
        }
      });

      pulseNodes.forEach((node, index) => {
        node.scale.setScalar(1 + Math.sin(elapsed * 1.8 + index) * 0.18);
        const material = node.material;
        if (material instanceof THREE.MeshBasicMaterial) {
          material.opacity = 0.28 + Math.sin(elapsed * 2 + index) * 0.2;
        }
      });

      outputCards.forEach((card, index) => {
        card.position.y = 0.74 - index * 0.54 + Math.sin(elapsed * 0.72 + index) * 0.035;
      });

      renderer.render(scene, camera);
      if (!reduceMotion) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointer);
      renderer.dispose();
      scene.traverse((object) => {
        if (
          object instanceof THREE.Mesh ||
          object instanceof THREE.Line ||
          object instanceof THREE.Points
        ) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => {
              if ("map" in item && item.map) {
                item.map.dispose();
              }
              item.dispose();
            });
          } else {
            if ("map" in material && material.map) {
              material.map.dispose();
            }
            material.dispose();
          }
        }
      });
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      data-testid="hero-3d-scene"
    />
  );
}
