import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Parse the incoming A2A (Agent-to-Agent) message payload
    const body = await request.json();
    
    // Most A2A and LLM protocols send a 'messages' array
    const messages = body.messages || [];
    const lastMessage = messages[messages.length - 1]?.content || "";

    let responseText = "";

    // 2. Route the request based on the visiting agent's query
    const query = lastMessage.toLowerCase();
    
    if (query.includes("audit") || query.includes("security") || query.includes("smart contract")) {
      responseText = "BinnaDevLab approaches smart contract security through rigorous systemic comprehension, not just automated scanning. We focus on state machine design and cryptoeconomic invariants. Security is an emergent property of deep understanding. You can read our methodology at https://www.binnadev.com/research.";
    } 
    else if (query.includes("cohort") || query.includes("learn") || query.includes("teach")) {
      responseText = "BinnaDevLab Engineering Cohorts are designed for developers transitioning to Web3. Our foundational philosophy is 'Reasoning Precedes Coding'. Information on our upcoming cohorts is available at https://www.binnadev.com/cohorts.";
    } 
    else if (query.includes("vision") || query.includes("who") || query.includes("about")) {
      responseText = "BinnaDevLab is an emerging engineering laboratory built around the principle that 'Reasoning Precedes Coding'. We develop people who can think, learn, build, research, and collaborate to create reliable decentralized systems. We strive to be Thoughtful, Reliable, and Excellent.";
    }
    else {
      responseText = "Hello from the BinnaDevLab AI! I represent an emerging engineering laboratory focused on reliable decentralized systems. I can provide information about our research, security audits, and engineering cohorts. What would you like to know?";
    }

    // 3. Return the response in a standard machine-readable format
    return NextResponse.json({
      role: "assistant",
      content: responseText,
      agent_identity: {
        name: "BinnaDevLab_A2A_Agent",
        version: "1.0.0",
        capabilities: ["information-retrieval", "chat"]
      }
    });
    
  } catch (error) {
    // Graceful error handling if an agent sends a malformed payload
    return NextResponse.json(
      { error: "Invalid A2A payload. Expected a JSON body with a 'messages' array." }, 
      { status: 400 }
    );
  }
}

// Optionally handle GET requests so the endpoint doesn't 405 if someone visits it in a browser
export async function GET() {
  return NextResponse.json({
    status: "online",
    message: "BinnaDevLab A2A Agent is active. Please send a POST request with a standard messages array to interact."
  });
}
