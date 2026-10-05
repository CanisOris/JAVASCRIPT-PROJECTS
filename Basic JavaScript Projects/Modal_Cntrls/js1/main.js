


function toggleModal(modalId, config = {}, event = null) {
    const modalElement = document.getElementById(modalId);
    const contentElement = modalElement.querySelector('.modal-content') || modalElement;

    // Check if open (catches both 'grid' and 'block' display states)
    const isOpen = modalElement.style.display === "grid" || modalElement.style.display === "block";

    if (isOpen) {
        modalElement.style.display = "none";
        
        // Clean up inline positioning
        contentElement.style.position = '';
        contentElement.style.left = '';
        contentElement.style.top = '';
        contentElement.style.margin = '';
    } else {
        // 1. Apply Size
        if (config.size) {
            contentElement.style.width = config.size.width || '';
            contentElement.style.height = config.size.height || '';
        }
        
        // 2. Apply Style
        if (config.style) {
            contentElement.style.backgroundColor = config.style.backgroundColor || '';
            contentElement.style.color = config.style.color || '';
            contentElement.style.border = config.style.border || '';
            contentElement.style.padding = config.style.padding || '';
            contentElement.style.boxShadow = config.style.boxShadow || '';
        }

        // 3. Apply Location & Display State
        if (config.location && config.location.useClickPosition && event) {
            // Position absolutely using viewport coordinates
            contentElement.style.position = 'absolute';
            contentElement.style.left = (event.clientX + (config.location.offsetX || 0)) + 'px';
            contentElement.style.top = (event.clientY + (config.location.offsetY || 0)) + 'px';
            contentElement.style.margin = "0"; 
            
            // Use 'block' for the overlay to allow coordinate positioning
            modalElement.style.display = "block"; 
        } else {
            // Default CSS Grid alignment
            if (config.location) {
                // Grid uses justify-items for horizontal alignment of the child
                modalElement.style.justifyItems = config.location.horizontal || 'center';
                modalElement.style.alignItems = config.location.vertical || 'center';
            } else {
                modalElement.style.justifyItems = 'center';
                modalElement.style.alignItems = 'center';
            }
            modalElement.style.display = "grid";
        }
    }
}


const warningConfig = {
    size: { width: "600px", height: "auto" },
    location: { 
        horizontal: "center", 
        vertical: "start" // Changed from flex-start
    }, 
    style: { backgroundColor: "#3b1a1a", color: "#ff8888", border: "2px solid #ff4444" }
};

const sidePanelConfig = {
    size: { width: "350px", height: "100vh" },
    location: { 
        horizontal: "end", // Changed from flex-end
        vertical: "center" 
    }, 
    style: { backgroundColor: "#1e1e24", color: "#ffffff", border: "none", borderRadius: "0px" }
};

const roundedParagraphConfig = {
    size: { 
        width: "280px", 
        height: "80px" 
    },
    location: { 
        useClickPosition: true, // trigger click - button, link, ...

        offsetX: -140,            // Shifts 15px to the right of the click
        offsetY: 0             // Shifts 25px below the click so it doesn't block the cursor
    }, 
    style: { 
        backgroundColor: "#2e3440", 
        color: "#d8dee9", 
        border: "1px solid #4c566a",
        borderRadius: "16px",   // Creates the pronounced rounded window effect
        padding: "20px",        // Ample breathing room for paragraph text
        boxShadow: "0px 8px 24px rgba(0,0,0,0.6)" // Soft drop shadow to lift it off the page
    }
};