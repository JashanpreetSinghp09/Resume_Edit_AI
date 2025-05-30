// This component renders a textarea for the user to input their prompt.
// It accepts `prompt` and `setPrompt` as props to manage the state of the input.

export default function PromptBox({ prompt, setPrompt }) {
  return (
    <textarea
      placeholder="Enter rewrite prompt, e.g. 'Make this line more professional'"
      className="w-full border rounded p-2 mb-4"
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
    />
  );
}
