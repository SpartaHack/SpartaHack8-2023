export default function ToastLoadingMessages(): string {
  const loadingMessages: string[] = ["Loading..."];
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomIndex];
}
