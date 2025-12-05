## Overview and highlights

This is the frontend repository for the project restaurant voice agent.
Checkout the backend repository: [Link](https://github.com/MSVelan/restaurant-booking-voice-agent).
The repository also supports CRUD operations for booking details.

## Features:

- Real-time voice interaction with LiveKit Agents
- Camera video streaming support
- Screen sharing capabilities
- Audio visualization and level monitoring
- Virtual avatar integration
- Light/dark theme switching with system preference detection
- Customizable branding, colors, and UI text via configuration

## Project structure

```
restaurant-booking-voice-agent-frontend/
├── app/
│   ├── (app)/
│   ├── api/
│   │   ├── bookings/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   └── connection-details/
│   │       └── route.ts
│   ├── components/
│   ├── fonts/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── livekit/
│   └── app/
├── hooks/
├── lib/
│   ├── dbConnect.ts
│   └── utils.ts
├── public/
├── models/
│   └── Booking.ts
├── middleware.ts
└── package.json
```

## Getting started

Run the app with:

```bash
pnpm install
pnpm dev
```

And open http://localhost:3000 in your browser.

You'll also need an agent to speak with. Try our starter agent for [Python](https://github.com/livekit-examples/agent-starter-python), [Node.js](https://github.com/livekit-examples/agent-starter-node), or [create your own from scratch](https://docs.livekit.io/agents/start/voice-ai/).

## Setup

Install and run the livekit server

```console
curl -sSL https://get.livekit.io | bash
livekit-server --dev
```

You'll also need to configure your LiveKit credentials in `.env.local` (copy `.env.example` if you don't have one):

```console
cp .env.example .env.local
```

Modify the DB_CONNECTION_STRING in .env.local to the connection string for mongodb atlas cluster
