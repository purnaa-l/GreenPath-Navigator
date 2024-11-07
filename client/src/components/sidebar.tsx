import React, { useState } from "react";

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <button className="custom-sidebar-toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? "Open Menu" : "Close Menu"}
            </button>
            <div className={`custom-sidebar ${isCollapsed ? "collapsed" : ""}`}>
                <div className="custom-sidebar-header">Menu</div>
                <div className="custom-nav-item">Home</div>
                <div className="custom-nav-item">About</div>
                <div className="custom-nav-item">Services</div>
                <div className="custom-nav-item">Contact</div>
            </div>
        </>
    );
}
