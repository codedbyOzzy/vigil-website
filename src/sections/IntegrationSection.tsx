import ScrollReveal from '../components/ScrollReveal';
import CodeBlock from '../components/CodeBlock';

const integrationCode = `from vigil import Ember, Compass, Tide, Mirror

# Initialize once per user session
ember = Ember(user_id="user_123")
compass = Compass(user_id="user_123")
tide = Tide()
mirror = Mirror(user_id="user_123")

def handle_turn(user_msg: str, system_prompt: str) -> str:
    # 1. Observe the turn
    tide.observe(user_msg)
    compass.observe(user_msg)
    
    # 2. Build awareness context
    awareness = []
    active_loops = ember.get_active_context()
    if active_loops:
        awareness.append(active_loops)
    goal = compass.get_goal_directive()
    if goal:
        awareness.append(goal)
    state = tide.get_state_directive()
    if state:
        awareness.append(state)
    
    # 3. Inject into your system prompt
    if awareness:
        system_prompt += "\\n\\n[Context]\\n" + "\\n".join(awareness)
    
    # 4. Call your AI (OpenAI, Gemini, Ollama — anything)
    response = your_llm.complete(system_prompt, user_msg)
    
    # 5. Post-turn observation
    ember.observe(user_msg, response)
    mirror.record(user_msg, response)
    return response`;

export default function IntegrationSection() {
  return (
    <section id="integration" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-tide mb-6">05 / INTEGRATION</p>

          <h2 className="font-display-section text-text-primary mb-8">
            Drop It Into Any Pipeline
          </h2>

          <p className="font-body-large text-text-secondary mb-12">
            VIGIL is designed to be framework-agnostic. If your project has a conversation loop, VIGIL
            fits in. No framework lock-in. No cloud dependency. No ML training required.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <CodeBlock code={integrationCode} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <p className="font-body text-text-dim text-center">
            That's the full integration. No pipeline changes. No framework migration.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
