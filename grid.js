document.addEventListener('DOMContentLoaded', function() {
    // Create grid overlay elements
    const gridOverlay = document.createElement('div');
    gridOverlay.className = 'grid-overlay';
    gridOverlay.style.display = 'none';
    
    const gridVertical = document.createElement('div');
    gridVertical.className = 'grid-overlay-vertical';
    
    const gridHorizontal = document.createElement('div');
    gridHorizontal.className = 'grid-overlay-horizontal';
    
    // Create toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'grid-toggle';
    toggleButton.textContent = 'Show Grid';
    
    // Create measurements display
    const measurements = document.createElement('div');
    measurements.className = 'grid-measurements';
    measurements.style.display = 'none';
    
    // Create rulers
    const rulerX = document.createElement('div');
    rulerX.className = 'ruler-x';
    rulerX.style.display = 'none';
    
    const rulerY = document.createElement('div');
    rulerY.className = 'ruler-y';
    rulerY.style.display = 'none';
    
    // Add elements to the DOM
    gridOverlay.appendChild(gridVertical);
    gridOverlay.appendChild(gridHorizontal);
    document.body.appendChild(gridOverlay);
    document.body.appendChild(toggleButton);
    document.body.appendChild(measurements);
    document.body.appendChild(rulerX);
    document.body.appendChild(rulerY);
    
    // Create ruler markers
    function createRulers() {
      rulerX.innerHTML = '';
      rulerY.innerHTML = '';
      
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Create X ruler markers (every 100px)
      for (let i = 0; i <= windowWidth; i += 100) {
        const marker = document.createElement('div');
        marker.className = 'ruler-marker-x';
        marker.style.left = i + 'px';
        
        const text = document.createElement('div');
        text.className = 'ruler-text';
        text.textContent = i;
        text.style.left = (i + 2) + 'px';
        text.style.top = '2px';
        
        rulerX.appendChild(marker);
        rulerX.appendChild(text);
      }
      
      // Create Y ruler markers (every 100px)
      for (let i = 0; i <= windowHeight; i += 100) {
        const marker = document.createElement('div');
        marker.className = 'ruler-marker-y';
        marker.style.top = i + 'px';
        
        const text = document.createElement('div');
        text.className = 'ruler-text';
        text.textContent = i;
        text.style.top = (i + 2) + 'px';
        text.style.left = '2px';
        
        rulerY.appendChild(marker);
        rulerY.appendChild(text);
      }
    }
    
    // Toggle grid visibility
    let gridVisible = false;
    toggleButton.addEventListener('click', function() {
      gridVisible = !gridVisible;
      gridOverlay.style.display = gridVisible ? 'block' : 'none';
      measurements.style.display = gridVisible ? 'block' : 'none';
      rulerX.style.display = gridVisible ? 'block' : 'none';
      rulerY.style.display = gridVisible ? 'block' : 'none';
      toggleButton.textContent = gridVisible ? 'Hide Grid' : 'Show Grid';
      
      if (gridVisible) {
        createRulers();
      }
    });
    
    // Update measurements on mouse move
    document.addEventListener('mousemove', function(e) {
      if (gridVisible) {
        measurements.textContent = `X: ${e.clientX}px, Y: ${e.clientY}px`;
      }
    });
    
    // Update rulers on window resize
    window.addEventListener('resize', function() {
      if (gridVisible) {
        createRulers();
      }
    });
    
    // Allow grid customization with keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      if (!gridVisible) return;
      
      // Adjust grid size with + and - keys
      if (e.key === '+' || e.key === '=') {
        const currentSize = parseInt(getComputedStyle(gridVertical).backgroundSize.split(' ')[0]);
        const newSize = currentSize + 10;
        gridVertical.style.backgroundSize = `${newSize}px 100%`;
        gridHorizontal.style.backgroundSize = `100% ${newSize}px`;
        createRulers();
      } else if (e.key === '-' || e.key === '_') {
        const currentSize = parseInt(getComputedStyle(gridVertical).backgroundSize.split(' ')[0]);
        const newSize = Math.max(10, currentSize - 10);
        gridVertical.style.backgroundSize = `${newSize}px 100%`;
        gridHorizontal.style.backgroundSize = `100% ${newSize}px`;
        createRulers();
      }
    });
  });