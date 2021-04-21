
const ScrollFeature = () => {
    const ScrollUp = () => {
      const element = document.getElementById("HeadScroll");
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
        });
    };

    return (
        <div onClick={ScrollUp}>
          <i class="fas fa-angle-up"></i>
        </div>
      );
    };
    
export default ScrollFeature;