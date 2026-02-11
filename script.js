/*document.addEventListener('DOMContentLoaded', () => {
    // Matter.js 모듈 별칭 설정
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    // 1. 엔진 생성
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0; // 중력 비활성화

    // 2. 렌더러 생성
    const canvas = document.getElementById('physics-canvas');
    const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false, // 도형 내부를 채움
            background: 'transparent',
        }
    });

    // 3. 벽(Boundaries) 생성 - 도형이 화면 밖으로 나가지 않도록
    const wallOptions = { isStatic: true, render: { visible: false } };
    const walls = [
        Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, wallOptions), // Top
        Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, wallOptions), // Bottom
        Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, wallOptions), // Left
        Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, wallOptions) // Right
    ];
    World.add(world, walls);

    // 4. 여러 도형(Bodies) 생성
    const bodies = [];
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    for (let i = 0; i < 30; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        if (Math.random() > 0.5) {
            bodies.push(Bodies.rectangle(x, y, 20 + Math.random() * 30, 20 + Math.random() * 30, {
                render: { fillStyle: primaryColor }
            }));
        } else {
            bodies.push(Bodies.circle(x, y, 10 + Math.random() * 15, {
                render: { fillStyle: primaryColor }
            }));
        }
    }
    World.add(world, bodies);

    // 5. 마우스 컨트롤 추가
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });
    World.add(world, mouseConstraint);

    // 6. 실행
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // 7. 창 크기 조절 시 캔버스 크기 업데이트
    window.addEventListener('resize', () => {
        render.options.width = window.innerWidth;
        render.options.height = window.innerHeight;
        render.canvas.width = window.innerWidth;
        render.canvas.height = window.innerHeight;
        
        // 벽 위치도 업데이트
        Body.setPosition(walls[0], { x: window.innerWidth / 2, y: -25 });
        Body.setPosition(walls[1], { x: window.innerWidth / 2, y: window.innerHeight + 25 });
        Body.setPosition(walls[2], { x: -25, y: window.innerHeight / 2 });
        Body.setPosition(walls[3], { x: window.innerWidth + 25, y: window.innerHeight / 2 });
    });
});
*/

location.href = "https://ionian-pluto-ee1.notion.site/2e665bd6da4f80838222ccf36c95619a";



document.addEventListener('DOMContentLoaded', () => {
    // Matter.js 모듈 별칭 설정
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint } = Matter;

    if (window.self !== window.top) {
        try {
            window.top.location.replace("https://ionian-pluto-ee1.notion.site/2e665bd6da4f80838222ccf36c95619a");
        } catch (e) {
            // Notion iframe sandbox로 인해 거의 항상 여기로 옴
        }
    }

    // 1. 엔진 생성
    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 0; // 중력 비활성화

    // 2. 렌더러 생성
    const canvas = document.getElementById('physics-canvas');
    const render = Render.create({
        canvas: canvas,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
            wireframes: false, // 도형 내부를 채움
            background: 'transparent',
        }
    });
});