// import "./FloatingActions.css";

// function FloatingActions() {
//   return (
//     <>
//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/9179227154"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-float"
//         aria-label="Chat on WhatsApp"
//       >
//         💬
//       </a>
//     </>
//   );
// }

// export default FloatingActions;

import "./FloatingActions.css";

function FloatingActions() {
  return (
    <a
      href="https://wa.me/9179227154"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Hotel Dream Inn Khajuraho on WhatsApp"
      title="Chat with Hotel Dream Inn Khajuraho"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.04 2C6.58 2 2.15 6.35 2.15 11.72c0 2.1.56 4.05 1.54 5.74L2 22l4.7-1.51c1.61.88 3.43 1.38 5.34 1.38 5.46 0 9.89-4.35 9.89-9.72C21.93 6.35 17.5 2 12.04 2zm0 17.65c-1.69 0-3.26-.48-4.61-1.3l-.33-.2-2.79.9.91-2.64-.22-.34a7.53 7.53 0 01-1.22-4.05c0-4.18 3.5-7.58 7.26-7.58 4.01 0 7.26 3.4 7.26 7.58s-3.25 7.58-7.26 7.58zm3.96-5.8c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.94-.34-1.8-1.1-.67-.6-1.12-1.34-1.25-1.56-.13-.22-.01-.34.1-.45.1-.1.22-.26.34-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.19-.68-1.63-.18-.44-.36-.38-.5-.39h-.42c-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.88s.81 2.18.92 2.33c.11.15 1.6 2.44 3.87 3.42.54.23.97.37 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.3-.53 1.48-1.04.18-.5.18-.93.13-1.02-.06-.09-.2-.15-.42-.26z" />
      </svg>

      {/* TOOLTIP */}
      <span className="whatsapp-tooltip">Chat with Hotel Dream Inn</span>
    </a>
  );
}

export default FloatingActions;
