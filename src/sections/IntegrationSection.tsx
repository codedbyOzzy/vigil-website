import ScrollReveal from '../components/ScrollReveal';
import CodeBlock from '../components/CodeBlock';

const integrationCode = `from the_singularity import TheArc, TideStone, CompassStone, EmberStone, MirrorStone, Oracle, Spectre, Archive
import time

# Initialize once per user session
arc = TheArc()
tide = TideStone()
compass = CompassStone()
ember = EmberStone()
mirror = MirrorStone()
oracle = Oracle(the_arc=arc)
spectre = Spectre(the_arc=arc)
archive = Archive(the_arc=arc)

def handle_turn(user_msg: str, system_prompt: str) -> str:
    # 1. ORACLE Routing
    decision = oracle.route(user_msg)
    
    # 2. Build Awareness Context
    additions = []
    if ctx := arc.consult(user_msg): additions.append(ctx)
    if d := tide.get_state_directive(): additions.append(d)
    if d := compass.get_goal_directive(): additions.append(d)
    if d := ember.get_active_context(): additions.append(d)
    if d := archive.query(user_msg, depth="all"): additions.append(d)
    
    # 3. SPECTRE Proactive Predictions
    preds = spectre.predict_next([{"content": user_msg, "role": "user"}])
    if preds: additions.append(spectre.get_proactive_prompt(preds))
    
    # 4. Final System Prompt
    system_prompt += "\\n\\n" + "\\n\\n".join(additions)
    
    # 5. Call Chosen Model
    response = call_llm(decision.primary_model, system_prompt, user_msg)
    
    # 6. Absorb the outcome
    arc.absorb(TurnRecord(role="user", content=user_msg, timestamp=time.time()))
    tide.observe_user(user_msg)
    return response`;

export default function IntegrationSection() {
  return (
    <section id="integration" className="bg-surface-void py-[120px] px-6">
      <div className="max-w-[800px] mx-auto">
        <ScrollReveal stagger={0.15}>
          <p className="section-label text-accent-stone mb-6">05 / INTEGRATION</p>

          <h2 className="font-display-section text-text-primary mb-8">
            The Convergence Loop
          </h2>

          <p className="font-body-large text-text-secondary mb-12">
            The Singularity integrates directly into your conversation loop. It doesn't replace your LLM — it gives it the <strong>contextual soul</strong> it needs to understand the human on the other side.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <CodeBlock code={integrationCode} />
        </ScrollReveal>

        <ScrollReveal className="mt-6">
          <p className="font-body text-text-dim text-center">
            Zero dependencies. Zero ML training. Just drop in the .py files and go.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
