import React from 'react';
import { useState, useRef, useEffect } from 'react'




function Visualizer() {
    //My state initializations go here
    const [agents, setAgents] = useState([])

    const [dimensions, setDimensions] = useState({ width: window.innerWidth < 600 ? window.innerWidth * 0.9 : window.innerWidth * 0.3, height: window.innerHeight * 0.4 });
    let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    let [reload, setReload] = useState(0)
    const canvasRef = useRef(null);

    //Function to detect if page is reloaded
    function pageReloadChecker() {
        if (window.performance) {
            if (performance.navigation.type == 1) {
                setReload(reload += 1)
            }
        }
    }


    useEffect(() => {
        pageReloadChecker()
        console.log(window.innerWidth)
    }, [])

    //Function to add velocity on mouseMove

    function mouseMove(e) {
        setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })

        console.log(mousePosition)
    }


    // My utility functions for drawing on the canvas

    function getRandomRange(min, max) {
        return Math.random() * (max - min) + min;
    }



    // ==========================================================================================
    // Function that mounts the canvas on the window



    // ======================================================================================
    // Creating the classes where the drawng would take place

    // The vector class shows the position and velocity of the agent
    class Vector {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        getDistance(v) {
            const dx = this.x - v.x;
            const dy = this.y - v.y;

            return Math.sqrt(dx * dx + dy * dy)
        }
    }

    //  The Agent class refers to each of the dots on the screen

    class Agent {
        constructor(x, y) {

            this.pos = new Vector(x, y);
            this.vel = new Vector(getRandomRange(-1, 1), getRandomRange(-1, 1))
            this.radius = getRandomRange(1, 4);

        }

        bounce(width, height) {
            if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;

            if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;

        }

        update(audio) {
            this.pos.x += this.vel.x * audio * 0.1;
            this.pos.y += this.vel.y * audio * 0.1;
        }

        drawAgent(context) {
            context.save();
            context.translate(this.pos.x, this.pos.y);

            // this controls the color and style of the circles
            context.lineWidth = 2
            context.fillStyle = 'white'
            context.beginPath();
            context.arc(0, 0, this.radius, 0, Math.PI * 2);

            context.fill();
            context.stroke();
            context.restore();
        }
    }

    // Classes have been defined up here and the methods that exist within them
    // =========================================================================================


    // Function that creates an array of agents based on the agent class


    function AgentCreator() {
        const agents = [];
        for (let i = 0; i < 30; i++) {

            const x = getRandomRange(0, dimensions.width)
            const y = getRandomRange(0, dimensions.height)
            agents.push(new Agent(x, y))
        }
        setAgents(agents)

    }



    // function that draws the line between agents
    const drawLine = (context) => {

        context.fillStyle = '#040343';
        context.fillRect(0, 0, dimensions.width, dimensions.height);

        for (let i = 0; i < agents.length; i++) {
            const agent = agents[i];

            for (let j = i + 1; j < agents.length; j++) {
                const other = agents[j]
                const dist = agent.pos.getDistance(other.pos)

                if (dist > 60) continue;

                context.lineWidth = 2;
                context.strokeStyle = '#D6DEE9'
                context.beginPath();
                context.moveTo(agent.pos.x, agent.pos.y);
                context.lineTo(other.pos.x, other.pos.y);
                context.stroke();

            }
        }


        agents.forEach(agent => {
            agent.update((30));
            agent.drawAgent(context);
            agent.bounce(dimensions.width, dimensions.height);
        })

    }


    useEffect(() => {
        AgentCreator()
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const render = () => {
            drawLine(context)
            window.requestAnimationFrame(render)
        }
        render()
    }, [reload])

    return (
        <div className="w-full">
            <canvas onMouseMove={mouseMove} ref={canvasRef} width={dimensions.width} height={dimensions.height} className='bg-tansparent' />
        </div>
    )
}

export default Visualizer
