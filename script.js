// script.js - CYPRESS-SAFE ANALOG CLOCK (No SyntaxErrors in beforeEach)

// CRITICAL: Defensive loading - Check elements exist before use
(function() {
    'use strict';
    
    // Elements with null checks
    const hourEl = document.getElementById('hour');
    const minuteEl = document.getElementById('minute');
    const secondEl = document.getElementById('second');
    
    if (!hourEl || !minuteEl || !secondEl) {
        console.warn('Clock hands not found - waiting...');
        return;
    }
    
    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        // Second: 6° per second
        const secondDeg = seconds * 6;
        secondEl.style.transform = `rotate(${secondDeg}deg)`;
        
        // Minute: 6° per minute + 0.1° per second
        const minuteDeg = minutes * 6 + seconds * 0.1;
        minuteEl.style.transform = `rotate(${minuteDeg}deg)`;
        
        // Hour: 30° per hour + 0.5° per minute + 1/120° per second
        const hourDeg = (hours % 12) * 30 + minutes * 0.5 + seconds * (0.5 / 60);
        hourEl.style.transform = `rotate(${hourDeg}deg)`;
    }
    
    // Update every second + initial call
    updateClock();
    setInterval(updateClock, 1000);
})();