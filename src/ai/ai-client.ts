/**
 * Phase 3: AI Tutor Interface
 *
 * Wire an Anthropic API key via a serverless function (e.g., Supabase Edge Function
 * or Vercel serverless) to keep the key out of the client bundle.
 *
 * Features to implement:
 *   - "Explain this differently" on any lesson
 *   - "Quiz me on this lesson" to generate fresh questions
 *   - Free-text tutor chat scoped to current module
 */

export interface AiMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface AiClient {
  /** Get an alternative explanation for lesson content. */
  explainDifferently(lessonContent: string, moduleContext: string): Promise<string>;

  /** Generate quiz questions for a lesson. */
  generateQuestions(
    lessonContent: string,
    count: number
  ): Promise<Array<{
    stem: string;
    choices: string[];
    correctIndex: number;
    explanation: string;
  }>>;

  /** Send a chat message in a tutoring conversation. */
  chat(
    messages: AiMessage[],
    moduleContext: string
  ): Promise<string>;
}

// Placeholder implementation — replace with real API calls in Phase 3
// Phase 3: export and use when ready
export class StubAiClient implements AiClient {
  async explainDifferently(): Promise<string> {
    throw new Error('AI features not yet enabled — Phase 3');
  }
  async generateQuestions() {
    throw new Error('AI features not yet enabled — Phase 3');
    return [];
  }
  async chat(): Promise<string> {
    throw new Error('AI features not yet enabled — Phase 3');
  }
}
