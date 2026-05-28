"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type WorldZone = {
  id: string;
  title: string;
  label: string;
  body: string;
  href: string;
  cta: string;
  color: string;
  position: [number, number];
};

const zones: WorldZone[] = [
  {
    id: "projects",
    title: "만든 사이트",
    label: "Portfolio",
    body: "필라테스, 뷰티, 학원, 1인 전문가용 샘플 랜딩을 모아 보여주는 공간입니다.",
    href: "/projects",
    cta: "작업물 보기",
    color: "#60a5fa",
    position: [-3.1, -2.2],
  },
  {
    id: "audit",
    title: "무료 진단",
    label: "Diagnosis",
    body: "첫 문장, 빠진 신뢰 정보, 문의 CTA를 짧게 점검하는 첫 오퍼입니다.",
    href: "/#contact",
    cta: "진단 신청",
    color: "#34d399",
    position: [3.1, -2.2],
  },
  {
    id: "process",
    title: "AI 팀 운영",
    label: "Workflow",
    body: "리서치, Notion 정리, 마케팅 문구, 화면 제작이 이어지는 제작 방식입니다.",
    href: "/#screens",
    cta: "운영 방식 보기",
    color: "#fbbf24",
    position: [-3.1, 2.2],
  },
  {
    id: "offer",
    title: "7일 랜딩",
    label: "Offer",
    body: "무료 진단 후 바로 실행 가능한 1페이지 브랜딩 랜딩 제작 범위입니다.",
    href: "/#packages",
    cta: "패키지 보기",
    color: "#fb7185",
    position: [3.1, 2.2],
  },
];

function makeLabelTexture(label: string, color: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 192;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return new THREE.CanvasTexture(canvas);
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(10, 10, 12, 0.72)";
  ctx.roundRect(24, 36, 464, 104, 28);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.font = "700 42px Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(label, 256, 102);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function addCharacter() {
  const character = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.32, 0.34, 8, 20),
    new THREE.MeshStandardMaterial({
      color: "#f8fafc",
      roughness: 0.42,
      metalness: 0.12,
    }),
  );
  body.position.y = 0.58;
  character.add(body);

  const face = new THREE.Mesh(
    new THREE.SphereGeometry(0.28, 32, 32),
    new THREE.MeshStandardMaterial({
      color: "#ffffff",
      roughness: 0.36,
      metalness: 0.08,
    }),
  );
  face.position.y = 1.02;
  character.add(face);

  const visor = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.1, 0.035),
    new THREE.MeshBasicMaterial({ color: "#101827" }),
  );
  visor.position.set(0, 1.03, 0.25);
  character.add(visor);

  [-0.16, 0.16].forEach((x) => {
    const foot = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 18, 18),
      new THREE.MeshStandardMaterial({ color: "#17191f", roughness: 0.54 }),
    );
    foot.scale.set(1.2, 0.48, 1.6);
    foot.position.set(x, 0.14, 0.08);
    character.add(foot);
  });

  const antenna = new THREE.Mesh(
    new THREE.SphereGeometry(0.065, 20, 20),
    new THREE.MeshBasicMaterial({ color: "#34d399" }),
  );
  antenna.position.set(0, 1.34, 0);
  character.add(antenna);

  character.position.set(0, 0, 0);
  return character;
}

function disposeObject(object: THREE.Object3D) {
  object.traverse((child) => {
    if (
      child instanceof THREE.Mesh ||
      child instanceof THREE.Line ||
      child instanceof THREE.Points
    ) {
      child.geometry.dispose();
      const material = child.material;
      if (Array.isArray(material)) {
        material.forEach((item) => {
          if ("map" in item && item.map) {
            item.map.dispose();
          }
          item.dispose();
        });
        return;
      }
      if ("map" in material && material.map) {
        material.map.dispose();
      }
      material.dispose();
    }
  });
}

export function InteractivePortfolioWorld() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetZoneRef = useRef<string | null>(null);
  const activeIdRef = useRef(zones[0].id);
  const [activeId, setActiveId] = useState(zones[0].id);

  const activeZone = useMemo(
    () => zones.find((zone) => zone.id === activeId) ?? zones[0],
    [activeId],
  );

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#090b10");

    const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 100);
    camera.position.set(0, 7.2, 8.4);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      powerPreference: "high-performance",
    });
    renderer.domElement.setAttribute(
      "aria-label",
      "키보드와 마우스로 움직이는 Brand Ops 3D 포트폴리오 월드",
    );
    renderer.domElement.setAttribute("role", "img");
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight("#ffffff", 1.7);
    scene.add(ambient);

    const key = new THREE.DirectionalLight("#e0f2fe", 2.4);
    key.position.set(3, 7, 4);
    scene.add(key);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(9.4, 7.2),
      new THREE.MeshStandardMaterial({
        color: "#111827",
        roughness: 0.72,
        metalness: 0.04,
      }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(9.4, 18, "#405069", "#263241");
    grid.position.y = 0.01;
    scene.add(grid);

    const pads: THREE.Mesh[] = [];
    zones.forEach((zone) => {
      const [x, z] = zone.position;
      const pad = new THREE.Mesh(
        new THREE.CylinderGeometry(0.72, 0.72, 0.08, 48),
        new THREE.MeshStandardMaterial({
          color: zone.color,
          emissive: zone.color,
          emissiveIntensity: 0.28,
          roughness: 0.5,
        }),
      );
      pad.position.set(x, 0.04, z);
      pad.userData.zoneId = zone.id;
      scene.add(pad);
      pads.push(pad);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.86, 0.025, 12, 72),
        new THREE.MeshBasicMaterial({
          color: zone.color,
          transparent: true,
          opacity: 0.72,
        }),
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, 0.11, z);
      scene.add(ring);

      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(1.42, 0.54),
        new THREE.MeshBasicMaterial({
          map: makeLabelTexture(zone.label, zone.color),
          transparent: true,
          depthWrite: false,
        }),
      );
      label.position.set(x, 0.88, z);
      label.rotation.x = -0.72;
      scene.add(label);
    });

    const character = addCharacter();
    scene.add(character);

    const destination = new THREE.Vector3(0, 0, 0);
    const keys = new Set<string>();
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const clickPoint = new THREE.Vector3();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const width = Math.max(container.clientWidth, 1);
      const height = Math.max(container.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(
          event.key,
        )
      ) {
        keys.add(event.key.toLowerCase());
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keys.delete(event.key.toLowerCase());
    };

    const moveToScreenPoint = (event: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.ray.intersectPlane(groundPlane, clickPoint)) {
        destination.set(
          THREE.MathUtils.clamp(clickPoint.x, -4.2, 4.2),
          0,
          THREE.MathUtils.clamp(clickPoint.z, -3.2, 3.2),
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    renderer.domElement.addEventListener("pointerdown", moveToScreenPoint);
    window.addEventListener("resize", resize);
    resize();

    const clock = new THREE.Clock();
    let animationFrame = 0;

    const animate = () => {
      const delta = Math.min(clock.getDelta(), 0.04);
      const elapsed = clock.getElapsedTime();

      const requestedZone = targetZoneRef.current;
      if (requestedZone) {
        const zone = zones.find((item) => item.id === requestedZone);
        if (zone) {
          destination.set(zone.position[0], 0, zone.position[1]);
        }
        targetZoneRef.current = null;
      }

      const direction = new THREE.Vector3();
      if (keys.has("arrowup") || keys.has("w")) direction.z -= 1;
      if (keys.has("arrowdown") || keys.has("s")) direction.z += 1;
      if (keys.has("arrowleft") || keys.has("a")) direction.x -= 1;
      if (keys.has("arrowright") || keys.has("d")) direction.x += 1;

      const speed = 3.6 * delta;
      if (direction.lengthSq() > 0) {
        direction.normalize();
        character.position.x = THREE.MathUtils.clamp(
          character.position.x + direction.x * speed,
          -4.2,
          4.2,
        );
        character.position.z = THREE.MathUtils.clamp(
          character.position.z + direction.z * speed,
          -3.2,
          3.2,
        );
        destination.copy(character.position);
      } else {
        const toTarget = destination.clone().sub(character.position);
        if (toTarget.length() > 0.035) {
          toTarget.normalize();
          character.position.x += toTarget.x * speed;
          character.position.z += toTarget.z * speed;
        }
      }

      if (direction.lengthSq() > 0.001) {
        character.rotation.y = Math.atan2(direction.x, direction.z);
      }

      character.position.y = reduceMotion ? 0 : Math.sin(elapsed * 4.6) * 0.035;

      pads.forEach((pad, index) => {
        const zoneId = pad.userData.zoneId as string;
        const distance = character.position.distanceTo(pad.position);
        const material = pad.material;
        if (material instanceof THREE.MeshStandardMaterial) {
          material.emissiveIntensity = distance < 1.08 ? 0.75 : 0.26;
        }
        pad.scale.setScalar(1 + Math.sin(elapsed * 1.8 + index) * 0.025);

        if (distance < 1.08 && activeIdRef.current !== zoneId) {
          activeIdRef.current = zoneId;
          setActiveId(zoneId);
        }
      });

      camera.position.lerp(
        new THREE.Vector3(
          character.position.x * 0.22,
          7.2,
          8.4 + character.position.z * 0.18,
        ),
        0.06,
      );
      camera.lookAt(character.position.x * 0.12, 0, character.position.z * 0.12);
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      renderer.domElement.removeEventListener("pointerdown", moveToScreenPoint);
      window.removeEventListener("resize", resize);
      disposeObject(scene);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#090b10] shadow-[0_28px_90px_rgba(0,0,0,0.26)]">
        <div
          ref={containerRef}
          className="h-[520px] outline-none"
          data-active-zone={activeId}
          data-testid="interactive-portfolio-world"
          role="application"
          tabIndex={0}
          aria-label="WASD 또는 방향키로 캐릭터를 움직이고, 마우스나 터치로 이동 지점을 선택하세요."
        />
        <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/10 bg-black/44 px-4 py-3 text-xs font-semibold text-white backdrop-blur-md">
          WASD / 방향키 이동 · 클릭 또는 터치로 이동
        </div>
        <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:grid-cols-4">
          {zones.map((zone) => (
            <button
              key={zone.id}
              type="button"
              aria-label={`${zone.label} ${zone.title} 열기`}
              onClick={() => {
                targetZoneRef.current = zone.id;
                setActiveId(zone.id);
              }}
              className="rounded-2xl border border-white/10 bg-white/88 px-3 py-3 text-left text-xs font-bold text-[#111827] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              style={{
                outline:
                  activeZone.id === zone.id ? `2px solid ${zone.color}` : undefined,
              }}
            >
              <span className="block text-[11px] uppercase text-stone-500">
                {zone.label}
              </span>
              {zone.title}
            </button>
          ))}
        </div>
      </div>

      <aside className="rounded-[28px] border border-black/8 bg-white p-6 shadow-[0_18px_60px_rgba(20,28,44,0.08)]">
        <p className="text-sm font-bold uppercase" style={{ color: activeZone.color }}>
          {activeZone.label}
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#111827]">
          {activeZone.title}
        </h2>
        <p className="mt-4 text-base leading-7 text-stone-600">{activeZone.body}</p>
        <a
          href={activeZone.href}
          className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#17191f] px-5 text-sm font-semibold text-white transition hover:bg-[#5a55ff]"
        >
          {activeZone.cta}
        </a>
        <div className="mt-8 rounded-2xl bg-[#f7f7fb] p-4">
          <p className="text-xs font-bold uppercase text-stone-500">사용 방식</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#17191f]">
            캐릭터가 각 패드 가까이 가면 오른쪽 정보가 바뀝니다. 버튼으로도 같은 영역을
            바로 열 수 있습니다.
          </p>
        </div>
      </aside>
    </div>
  );
}
