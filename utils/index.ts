export const sideBarMotion = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
    transition: { type: 'cubic'}
}

export const replaceMessage = (() => {
  let counter = 0;
  return (message: string) => {
    return message.replace(/(\[\d+(\.\d+)?(,\s*\d+(\.\d+)?)*\])/g, (match) => {
      return ` *${++counter}* `;
    });
  };
})();

export const user_id = "4KNAN001tZhyNg96DkfkLeF6fvm2";
export const course_id = "83e6002084934c8781979bc2904e7ced";
export const content_id = ["kCc8FmEb1nY"]
export const contentId = "kCc8FmEb1nY"
export const information = {}