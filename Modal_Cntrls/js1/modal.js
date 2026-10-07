const warningConfig = {
    size: { width: "600px", height: "auto" },
    location: { horizontal: "center", vertical: "start" }, 
    style: { backgroundColor: "#3b1a1a", color: "#ff8888", border: "2px solid #ff4444" }
};

const sidePanelConfig = {
    size: { width: "350px", height: "100vh" },
    location: { horizontal: "end", vertical: "center" }, 
    style: { backgroundColor: "#1e1e24", color: "#ffffff", border: "none", borderRadius: "0px" }
};

const roundedParagraphConfig = {
    size: { width: "280px", height: "auto" },
    location: { useClickPosition: true, offsetX: 15, offsetY: 25 }, 
    style: { backgroundColor: "#2e3440", color: "#d8dee9", border: "1px solid #4c566a", borderRadius: "16px", padding: "20px", boxShadow: "0px 8px 24px rgba(0,0,0,0.6)" }
};

function toggleModal(modalId, config = {}, event = null) {
    const modalElement = document.getElementById(modalId);
    const contentElement = modalElement.querySelector('.modal-content') || modalElement;
    const isOpen = modalElement.style.display === "grid" || modalElement.style.display === "block" || modalElement.style.display === "flex";

    if (isOpen) {
        modalElement.style.display = "none";
        contentElement.style.position = '';
        contentElement.style.left = '';
        contentElement.style.top = '';
        contentElement.style.margin = '';
    } else {
        if (config.size) {
            contentElement.style.width = config.size.width || '';
            contentElement.style.height = config.size.height || '';
        }
        
        if (config.style) {
            contentElement.style.backgroundColor = config.style.backgroundColor || '';
            contentElement.style.color = config.style.color || '';
            contentElement.style.border = config.style.border || '';
            contentElement.style.padding = config.style.padding || '';
            contentElement.style.boxShadow = config.style.boxShadow || '';
            contentElement.style.borderRadius = config.style.borderRadius || '';
        }

        if (config.location && config.location.useClickPosition && event) {
            contentElement.style.position = 'absolute';
            contentElement.style.left = (event.clientX + (config.location.offsetX || 0)) + 'px';
            contentElement.style.top = (event.clientY + (config.location.offsetY || 0)) + 'px';
            contentElement.style.margin = "0"; 
            modalElement.style.display = "block"; 
        } else {
            if (config.location) {
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



// ++++++++++++++++++++++++++++++++++++++++++++
// LOADING SPINNER 
// ++++++++++++++++++++++++++++++++++++++++++++

const loadingSpinnerConfig = {
    size: { width: "160px", height: "auto" },
    location: { horizontal: "center", vertical: "center" },
    style: {
        backgroundColor: "#1e1e24",
        color: "#d8dee9",
        border: "1px solid #3e4451",
        borderRadius: "12px",
        padding: "24px 16px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)"
    }
};