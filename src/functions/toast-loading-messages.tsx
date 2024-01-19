export default function ToastLoadingMessages(): string {
  const loadingMessages: string[] = [
    "Please bear with us as we prepare the information for you",
    "Your request is in progress; thank you for your patience",
    "Loading essential data to enhance your experience",
    "A momentary pause while we fetch the necessary details",
    "In the background, our systems are diligently at work for you",
    "Processing your request—thank you for your understanding",
    "We're working behind the scenes to provide you with the latest updates",
    "Kindly hold on as we retrieve the required information for you",
    "Your wait is appreciated; we're loading the content you requested",
    "In progress: optimizing your experience with the latest data",
  ];
  const randomIndex = Math.floor(Math.random() * loadingMessages.length);
  return loadingMessages[randomIndex];
}
