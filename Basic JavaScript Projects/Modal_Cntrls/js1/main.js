


function toggleModal(modalId, config = {}) {
    const modalElement = document.getElementById(modalId);
    // Target the inner box for size and style changes, fallback to main element if missing
    const contentElement = modalElement.querySelector('.modal-content') || modalElement;

    function setDisplayState(cssValue) {
        modalElement.style.display = cssValue;
    }

    if (modalElement.style.display === "flex") {
        setDisplayState("none");
    } else {
        // Apply configurations when opening the modal
        if (config.size) {
            contentElement.style.width = config.size.width || '';
            contentElement.style.height = config.size.height || '';
        }
        
        if (config.location) {
            // Adjust flexbox alignment on the parent overlay to move the inner box
            modalElement.style.justifyContent = config.location.horizontal || 'center';
            modalElement.style.alignItems = config.location.vertical || 'center';
        }
        
        if (config.style) {
            contentElement.style.backgroundColor = config.style.backgroundColor || '';
            contentElement.style.color = config.style.color || '';
            contentElement.style.border = config.style.border || '';
        }

        setDisplayState("flex");
    }
}


const warningConfig = {
    size: { 
        width: "600px", 
        height: "auto" 
    },
    location: { 
        horizontal: "center", 
        vertical: "flex-start" // Pushes the modal to the top of the screen
    }, 
    style: { 
        backgroundColor: "#3b1a1a", 
        color: "#ff8888", 
        border: "2px solid #ff4444" 
    }
};

const sidePanelConfig = {
    size: { 
        width: "350px", 
        height: "100vh" // Takes up the full height of the viewport
    },
    location: { 
        horizontal: "flex-end", // Pushes the panel to the far right
        vertical: "center" 
    }, 
    style: { 
        backgroundColor: "#1e1e24", 
        color: "#ffffff", 
        border: "none",
        borderRadius: "0px" // Overrides standard modal rounding for a flush edge
    }
};