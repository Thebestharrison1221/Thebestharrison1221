document.addEventListener('DOMContentLoaded', () => {
    console.log('Tag Tool JS loaded');

    // Define font data first
    const fontData = {
        'A': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,0,0,1]
        ],
        'B': [
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0]
        ],
        'C': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,0],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        'D': [
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,1,1,1,0]
        ],
        'E': [
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,0,0],
            [1,0,0,0,0],
            [1,1,1,1,1]
        ],
        'F': [
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,0,0],
            [1,0,0,0,0],
            [1,0,0,0,0]
        ],
        'G': [
            [0,1,1,1,1],
            [1,0,0,0,0],
            [1,0,1,1,1],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        'H': [
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,1,1,1,1],
            [1,0,0,0,1],
            [1,0,0,0,1]
        ],
        'I': [
            [1,1,1,1,1],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [1,1,1,1,1]
        ],
        'J': [
            [1,1,1,1,1],
            [0,0,0,0,1],
            [0,0,0,0,1],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        'K': [
            [1,0,0,0,1],
            [1,0,0,1,0],
            [1,1,1,0,0],
            [1,0,0,1,0],
            [1,0,0,0,1]
        ],
        'L': [
            [1,0,0,0,0],
            [1,0,0,0,0],
            [1,0,0,0,0],
            [1,0,0,0,0],
            [1,1,1,1,1]
        ],
        'M': [
            [1,0,0,0,1],
            [1,1,0,1,1],
            [1,0,1,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1]
        ],
        'N': [
            [1,0,0,0,1],
            [1,1,0,0,1],
            [1,0,1,0,1],
            [1,0,0,1,1],
            [1,0,0,0,1]
        ],
        'O': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        'P': [
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0],
            [1,0,0,0,0],
            [1,0,0,0,0]
        ],
        'Q': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,0,0,1,0],
            [0,1,1,0,1]
        ],
        'R': [
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,1,1,1,0],
            [1,0,0,0,1],
            [1,0,0,0,1]
        ],
        'S': [
            [0,1,1,1,1],
            [1,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,1],
            [1,1,1,1,0]
        ],
        'T': [
            [1,1,1,1,1],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0]
        ],
        'U': [
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        'V': [
            [1,0,0,0,1],
            [1,0,0,0,1],
            [0,1,0,1,0],
            [0,1,0,1,0],
            [0,0,1,0,0]
        ],
        'W': [
            [1,0,0,0,1],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,1,0,1,1],
            [1,0,0,0,1]
        ],
        'X': [
            [1,0,0,0,1],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [0,1,0,1,0],
            [1,0,0,0,1]
        ],
        'Y': [
            [1,0,0,0,1],
            [0,1,0,1,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0]
        ],
        'Z': [
            [1,1,1,1,1],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,1,0,0,0],
            [1,1,1,1,1]
        ],
        '0': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [1,0,1,0,1],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        '1': [
            [0,0,1,0,0],
            [1,1,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [1,1,1,1,1]
        ],
        '2': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [0,0,1,1,0],
            [0,1,0,0,0],
            [1,1,1,1,1]
        ],
        '3': [
            [1,1,1,1,0],
            [0,0,0,0,1],
            [1,1,1,1,0],
            [0,0,0,0,1],
            [1,1,1,1,0]
        ],
        '4': [
            [1,0,0,1,0],
            [1,0,0,1,0],
            [1,1,1,1,1],
            [0,0,0,1,0],
            [0,0,0,1,0]
        ],
        '5': [
            [1,1,1,1,1],
            [1,0,0,0,0],
            [1,1,1,1,0],
            [0,0,0,0,1],
            [1,1,1,1,0]
        ],
        '6': [
            [0,1,1,1,0],
            [1,0,0,0,0],
            [1,1,1,1,0],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        '7': [
            [1,1,1,1,1],
            [0,0,0,0,1],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,0,1,0,0]
        ],
        '8': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [0,1,1,1,0],
            [1,0,0,0,1],
            [0,1,1,1,0]
        ],
        '9': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [0,1,1,1,1],
            [0,0,0,0,1],
            [0,1,1,1,0]
        ],
        '!': [
            [1],
            [1],
            [1],
            [0],
            [1]
        ],
        '?': [
            [0,1,1,1,0],
            [1,0,0,0,1],
            [0,0,1,1,0],
            [0,0,0,0,0],
            [0,0,1,0,0]
        ],
        '#': [
            [0,1,0,1,0],
            [1,1,1,1,1],
            [0,1,0,1,0],
            [1,1,1,1,1],
            [0,1,0,1,0]
        ],
        '%': [
            [1,0,0,0,1],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,1,0,0,0],
            [1,0,0,0,1]
        ],
        '/': [
            [0,0,0,0,1],
            [0,0,0,1,0],
            [0,0,1,0,0],
            [0,1,0,0,0],
            [1,0,0,0,0]
        ],
        "\"": [
            [1,0,0,0,0],
            [0,1,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,0],
            [0,0,0,0,1]
        ],
        '[': [
            [1,1,1],
            [1,0,0],
            [1,0,0],
            [1,0,0],
            [1,1,1]
        ],
        ']': [
            [1,1,1],
            [0,0,1],
            [0,0,1],
            [0,0,1],
            [1,1,1]
        ],
        '{': [
            [0,1,1,1],
            [0,1,0,0],
            [1,1,0,0],
            [0,1,0,0],
            [0,1,1,1]
        ],
        '}': [
            [1,1,1,0],
            [0,0,1,0],
            [0,0,1,1],
            [0,0,1,0],
            [1,1,1,0]
        ],
        '(': [
            [0,1,1],
            [1,0,0],
            [1,0,0],
            [1,0,0],
            [0,1,1]
        ],
        ')': [
            [1,1,0],
            [0,0,1],
            [0,0,1],
            [0,0,1],
            [1,1,0]
        ],
        '^': [
            [0,1,0],
            [1,0,1],
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ],
        '-': [
            [0,0,0],
            [0,0,0],
            [1,1,1],
            [0,0,0],
            [0,0,0]
        ],
        '+': [
            [0,0,0],
            [0,1,0],
            [1,1,1],
            [0,1,0],
            [0,0,0]
        ],
        '=': [
            [0,0,0],
            [1,1,1],
            [0,0,0],
            [1,1,1],
            [0,0,0]
        ],
        '_': [
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,0,0,0,0],
            [1,1,1,1,1]
        ],
        "'": [
            [1],
            [1],
            [0],
            [0],
            [0]
        ],
        ".": [
            [0],
            [0],
            [0],
            [0],
            [1]
        ],
        ",": [
            [0],
            [0],
            [0],
            [1],
            [1]
        ],
        "|": [
            [1],
            [1],
            [1],
            [1],
            [1]
        ],
        "<": [
            [0,0,1],
            [0,1,0],
            [1,0,0],
            [0,1,0],
            [0,0,1]
        ],
        ">": [
            [1,0,0],
            [0,1,0],
            [0,0,1],
            [0,1,0],
            [1,0,0]
        ],
        ' ': [
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]
    };

    // Initialize color inputs
    const textColorInput = document.getElementById('textColor1');
    const textHexInput = document.getElementById('textHex1');
    const bgColorInput = document.getElementById('bgColor1');
    const bgHexInput = document.getElementById('bgHex1');

    if (textColorInput) {
        textColorInput.value = DEFAULT_TEXT_COLOR;
    }
    if (textHexInput) {
        textHexInput.value = DEFAULT_TEXT_COLOR.substring(1);
    }

    // Sync color inputs with hex inputs
    function syncColorInputs(colorInput, hexInput) {
        if (!colorInput || !hexInput) return;

        // Update hex when color changes
        colorInput.addEventListener('input', () => {
            hexInput.value = colorInput.value.substring(1);
            generateImage();
        });

        // Update color when hex changes
        hexInput.addEventListener('input', () => {
            const hex = hexInput.value.replace(/[^0-9a-f]/gi, '');
            if (hex.length === 6) {
                colorInput.value = '#' + hex;
                generateImage();
            }
        });
    }

    // Set up color input sync
    syncColorInputs(textColorInput, textHexInput);
    syncColorInputs(bgColorInput, bgHexInput);

    // Define default colors
    const DEFAULT_TEXT_COLOR = '#ffffff';
    const DEFAULT_BG_COLOR = '#1d9bf0';  // Twitter Blue
    const NEW_TEXT_COLOR = '#ffffff';     // White for new text colors
    const NEW_BG_COLOR = '#000000';      // Black for new background colors

    // Define these at the top level so they're accessible to all functions
    let hPadding = 2;
    let vPadding = 1;
    const charWidth = 5;
    const charHeight = 5;
    const charSpacing = 1;
    
    // Add new default variables
    let bgDirection = false;      // false = horizontal, true = vertical
    let textDirection = false;    // false = horizontal, true = vertical
    let roundedCorners = false;   // false = square, true = rounded
    let textShadow = 3;          // 0 = none, 2 = below, 3 = right

    // Initialize switches with default values
    document.addEventListener('DOMContentLoaded', () => {
        // Set initial switch states
        document.getElementById('bgDirectionSwitch').checked = bgDirection;
        document.getElementById('textDirectionSwitch').checked = textDirection;
        document.getElementById('roundedCornersSwitch').checked = roundedCorners;
        document.getElementById('textShadowSwitch').value = textShadow.toString();

        // Add event listeners for switches
        document.getElementById('bgDirectionSwitch')?.addEventListener('change', (e) => {
            bgDirection = e.target.checked;
            generateImage();
        });

        document.getElementById('textDirectionSwitch')?.addEventListener('change', (e) => {
            textDirection = e.target.checked;
            generateImage();
        });

        document.getElementById('roundedCornersSwitch')?.addEventListener('change', (e) => {
            roundedCorners = e.target.checked;
            generateImage();
        });

        document.getElementById('textShadowSwitch')?.addEventListener('change', (e) => {
            textShadow = parseInt(e.target.value);
            generateImage();
        });
    });

    // Canvas setup
    const canvas = document.getElementById('canvas');
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Could not get canvas context');
        return;
    }

    // Initialize padding inputs
    const hPaddingInput = document.getElementById('hPadding');
    const vPaddingInput = document.getElementById('vPadding');
    
    // Set initial values
    if (hPaddingInput) hPaddingInput.value = hPadding;
    if (vPaddingInput) vPaddingInput.value = vPadding;

    // Add this function to calculate the total width needed
    function calculateCanvasWidth(text, hPadding) {
        // Calculate width based on characters
        const totalCharWidth = text.split('').reduce((width, char) => {
            const charData = fontData[char.toUpperCase()] || fontData[' '];
            return width + (charData ? charData[0].length : charWidth) + charSpacing;
        }, -charSpacing); // Subtract one spacing since we don't need space after last char

        // Add padding to both sides
        return totalCharWidth + (hPadding * 2);
    }

    // Modify updateCanvasSize function
    function updateCanvasSize() {
        const text = document.getElementById('textInput').value;
        const totalWidth = calculateCanvasWidth(text, hPadding);
        
        canvas.width = totalWidth;
        canvas.height = charHeight + (vPadding * 2);
        
        // Update display size (maintaining pixel art look)
        canvas.style.width = (totalWidth * 8) + 'px'; // 8x scale for display
        canvas.style.height = ((charHeight + (vPadding * 2)) * 8) + 'px';
        
        generateImage();
    }

    // Add event listener for text input to update canvas size
    document.getElementById('textInput')?.addEventListener('input', () => {
        updateCanvasSize();
    });

    // Padding button handlers
    document.getElementById('addHPadding')?.addEventListener('click', () => {
        const input = document.getElementById('hPadding');
        if (input) {
            const newValue = Math.min(10, parseInt(input.value) + 1);
            input.value = newValue;
            hPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('removeHPadding')?.addEventListener('click', () => {
        const input = document.getElementById('hPadding');
        if (input) {
            const newValue = Math.max(0, parseInt(input.value) - 1);
            input.value = newValue;
            hPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('addVPadding')?.addEventListener('click', () => {
        const input = document.getElementById('vPadding');
        if (input) {
            const newValue = Math.min(10, parseInt(input.value) + 1);
            input.value = newValue;
            vPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('removeVPadding')?.addEventListener('click', () => {
        const input = document.getElementById('vPadding');
        if (input) {
            const newValue = Math.max(0, parseInt(input.value) - 1);
            input.value = newValue;
            vPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    // Manual input handlers
    hPaddingInput?.addEventListener('change', () => {
        hPadding = Math.max(0, Math.min(10, parseInt(hPaddingInput.value) || 0));
        hPaddingInput.value = hPadding;
        updateCanvasSize();
    });

    vPaddingInput?.addEventListener('change', () => {
        vPadding = Math.max(0, Math.min(10, parseInt(vPaddingInput.value) || 0));
        vPaddingInput.value = vPadding;
        updateCanvasSize();
    });

    // Calculate canvas size based on default text and padding
    const defaultText = 'TheBest';
    
    // Calculate total width and height
    const totalWidth = (defaultText.length * (charWidth + charSpacing)) + (hPadding * 2) - charSpacing;
    const totalHeight = charHeight + (vPadding * 2);
    
    // Set canvas size to actual pixel dimensions
    canvas.width = totalWidth;
    canvas.height = totalHeight;
    
    // Make sure pixels are crisp
    ctx.imageSmoothingEnabled = false;

    function generateImage() {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const text = document.getElementById('textInput')?.value || defaultText;
        const textShadowMode = parseInt(document.getElementById('textShadowSwitch')?.value || '0');
        const bgVertical = document.getElementById('bgDirectionSwitch')?.checked || false;
        const textVertical = document.getElementById('textDirectionSwitch')?.checked || false;
        const roundedCorners = document.getElementById('roundedCornersSwitch')?.checked || false;
        
        // Get all background colors
        const bgColors = [];
        const bgColorAmount = parseInt(document.getElementById('bgColorAmount')?.value || 1);
        for (let i = 1; i <= bgColorAmount; i++) {
            const color = document.getElementById(`bgColor${i}`)?.value || '#000000';
            bgColors.push(color);
        }

        // Get all text colors
        const textColors = [];
        const textColorAmount = parseInt(document.getElementById('textColorAmount')?.value || 1);
        for (let i = 1; i <= textColorAmount; i++) {
            const color = document.getElementById(`textColor${i}`)?.value || '#ffffff';
            textColors.push(color);
        }
        
        // Draw background first
        if (bgColors.length > 1) {
            const gradient = ctx.createLinearGradient(
                0, 0, 
                bgVertical ? 0 : canvas.width,
                bgVertical ? canvas.height : 0
            );
            bgColors.forEach((color, index) => {
                gradient.addColorStop(index / (bgColors.length - 1), color);
            });
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            ctx.fillStyle = bgColors[0];
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        // Apply rounded corners if enabled
        if (roundedCorners) {
            // Clear corner pixels
            ctx.clearRect(0, 0, 1, 1); // Top-left
            ctx.clearRect(canvas.width - 1, 0, 1, 1); // Top-right
            ctx.clearRect(0, canvas.height - 1, 1, 1); // Bottom-left
            ctx.clearRect(canvas.width - 1, canvas.height - 1, 1, 1); // Bottom-right
        }

        // Draw shadow first if enabled
        if (textShadowMode > 0) {
            // Set shadow opacity
            ctx.globalAlpha = 0.5;
            
            // Calculate shadow offset
            const shadowOffsetX = textShadowMode === 3 ? 1 : 0; // Right shadow
            const shadowOffsetY = textShadowMode === 2 ? 1 : 0; // Bottom shadow

            // Draw shadow text
            let shadowX = hPadding + shadowOffsetX;
            for (let char of text.toUpperCase()) {
                if (fontData[char]) {
                    // Always use black for shadow
                    drawCharacter(char, shadowX, vPadding + shadowOffsetY, '#000000');
                    shadowX += charWidth + charSpacing;
                }
            }

            // Reset opacity for main text
            ctx.globalAlpha = 1.0;
        }

        // Draw main text
        let currentX = hPadding;
        if (textColors.length > 1) {
            // For multiple colors, we need to create a gradient for each character
            for (let i = 0; i < text.length; i++) {
                const char = text[i].toUpperCase();
                if (fontData[char]) {
                    // Calculate position based on direction
                    const position = textVertical ? 
                        (charHeight - 1 - (i % charHeight)) / (charHeight - 1) : // Vertical gradient
                        i / (text.length - 1); // Horizontal gradient
                    
                    let color;
                    if (textColors.length === 2) {
                        // Simple linear interpolation for 2 colors
                        color = interpolateColors(textColors[0], textColors[1], position);
                    } else {
                        // Find the appropriate color segment
                        const segment = position * (textColors.length - 1);
                        const index = Math.floor(segment);
                        const t = segment - index;
                        color = interpolateColors(
                            textColors[index], 
                            textColors[Math.min(index + 1, textColors.length - 1)], 
                            t
                        );
                    }
                    
                    // For vertical gradients, we need to draw the character pixel by pixel
                    if (textVertical) {
                        drawCharacterWithVerticalGradient(char, currentX, vPadding, textColors);
                    } else {
                        drawCharacter(char, currentX, vPadding, color);
                    }
                    
                    currentX += charWidth + charSpacing;
                }
            }
        } else {
            // Single color text
            for (let char of text.toUpperCase()) {
                if (fontData[char]) {
                    drawCharacter(char, currentX, vPadding, textColors[0]);
                    currentX += charWidth + charSpacing;
                }
            }
        }
    }

    // Helper function to interpolate between two colors
    function interpolateColors(color1, color2, factor) {
        const r1 = parseInt(color1.substring(1, 3), 16);
        const g1 = parseInt(color1.substring(3, 5), 16);
        const b1 = parseInt(color1.substring(5, 7), 16);
        
        const r2 = parseInt(color2.substring(1, 3), 16);
        const g2 = parseInt(color2.substring(3, 5), 16);
        const b2 = parseInt(color2.substring(5, 7), 16);
        
        const r = Math.round(r1 + (r2 - r1) * factor);
        const g = Math.round(g1 + (g2 - g1) * factor);
        const b = Math.round(b1 + (b2 - b1) * factor);
        
        return `#${(r < 16 ? '0' : '') + r.toString(16)}${(g < 16 ? '0' : '') + g.toString(16)}${(b < 16 ? '0' : '') + b.toString(16)}`;
    }

    function drawCharacter(char, x, y, color) {
        const pattern = fontData[char];
        if (!pattern) return;
        
        ctx.fillStyle = color;
        for (let row = 0; row < pattern.length; row++) {
            for (let col = 0; col < pattern[row].length; col++) {
                if (pattern[row][col]) {
                    ctx.fillRect(x + col, y + row, 1, 1);
                }
            }
        }
    }

    // Add this new function for vertical text gradients
    function drawCharacterWithVerticalGradient(char, x, y, colors) {
        const pattern = fontData[char];
        if (!pattern) return;
        
        for (let row = 0; row < pattern.length; row++) {
            // Calculate color for this row - Changed position calculation to reverse direction
            const position = row / (pattern.length - 1); // Removed the reversal to make gradient go bottom to top
            let color;
            
            if (colors.length === 2) {
                color = interpolateColors(colors[0], colors[1], position);
            } else {
                const segment = position * (colors.length - 1);
                const index = Math.floor(segment);
                const t = segment - index;
                color = interpolateColors(
                    colors[index],
                    colors[Math.min(index + 1, colors.length - 1)],
                    t
                );
            }
            
            // Draw this row with the calculated color
            for (let col = 0; col < pattern[row].length; col++) {
                if (pattern[row][col]) {
                    ctx.fillStyle = color;
                    ctx.fillRect(x + col, y + row, 1, 1);
                }
            }
        }
    }

    // Add event listeners for text and color inputs
    document.getElementById('textInput')?.addEventListener('input', generateImage);
    document.getElementById('bgColor1')?.addEventListener('input', generateImage);
    document.getElementById('textColor1')?.addEventListener('input', generateImage);

    // Copy button functionality
    document.getElementById('copyCanvasButton')?.addEventListener('click', async () => {
        try {
            const blob = await new Promise(resolve => canvas.toBlob(resolve));
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            
            const copyButton = document.getElementById('copyCanvasButton');
            const originalHTML = copyButton.innerHTML;
            copyButton.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Copied!
            `;
            setTimeout(() => {
                copyButton.innerHTML = originalHTML;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });

    // Save button functionality
    document.getElementById('saveCanvasButton')?.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = 'minecraft-tag.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Function to update color inputs
    function updateColorSection(type) {
        const container = document.getElementById(`${type}Colors`);
        const amount = parseInt(document.getElementById(`${type}ColorAmount`).value) || 1;
        const defaultColor = type === 'text' ? DEFAULT_TEXT_COLOR : DEFAULT_BG_COLOR;
        const newColor = type === 'text' ? NEW_TEXT_COLOR : NEW_BG_COLOR;
        
        if (!container) return;

        // Save existing colors
        const existingColors = [];
        for (let i = 1; i <= amount; i++) {
            const colorInput = document.getElementById(`${type}Color${i}`);
            if (colorInput) {
                existingColors[i-1] = colorInput.value;
            }
        }

        // Clear container
        container.innerHTML = '';

        // Add new color inputs
        for (let i = 1; i <= amount; i++) {
            const colorValue = i === 1 ? defaultColor : (existingColors[i-1] || newColor);
            const colorHtml = `
                <div class="color-entry p-3 bg-black/20 rounded-lg border border-zinc-800/50 relative">
                    <label for="${type}Color${i}" class="block text-gray-400 mb-2 text-sm">Color ${i}</label>
                    <div class="flex items-center gap-3">
                        <div class="color-picker-wrapper relative">
                            <input type="color" id="${type}Color${i}" class="color-box w-10 h-10 rounded-lg bg-black/30 border-2 border-zinc-700/50 hover:border-zinc-600 transition-colors cursor-pointer" value="${colorValue}">
                            <div class="absolute inset-0 rounded-lg pointer-events-none shadow-sm"></div>
                        </div>
                        <div class="flex-1">
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">#</span>
                                <input type="text" id="${type}Hex${i}" class="hex-input w-full pl-8 pr-3 py-2 bg-black/30 border border-zinc-800 rounded-lg text-gray-300 font-mono" value="${colorValue.substring(1)}">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', colorHtml);
        }

        // Re-initialize color sync for all inputs
        for (let i = 1; i <= amount; i++) {
            const colorInput = document.getElementById(`${type}Color${i}`);
            const hexInput = document.getElementById(`${type}Hex${i}`);
            if (colorInput && hexInput) {
                syncColorInputs(colorInput, hexInput);
                // Add change listeners to update canvas
                colorInput.addEventListener('input', generateImage);
                hexInput.addEventListener('input', generateImage);
            }
        }

        // Generate new image after updating colors
        generateImage();
    }

    // Initialize both color sections
    updateColorSection('text');
    updateColorSection('bg');

    // Add event listeners for color amount changes
    document.getElementById('textColorAmount')?.addEventListener('change', () => updateColorSection('text'));
    document.getElementById('bgColorAmount')?.addEventListener('change', () => updateColorSection('bg'));

    // Add/remove color button handlers
    document.getElementById('addTextColor')?.addEventListener('click', () => {
        const input = document.getElementById('textColorAmount');
        if (input) {
            const newValue = Math.min(5, parseInt(input.value) + 1);
            input.value = newValue;
            updateColorSection('text');
        }
    });

    document.getElementById('removeTextColor')?.addEventListener('click', () => {
        const input = document.getElementById('textColorAmount');
        if (input) {
            const newValue = Math.max(1, parseInt(input.value) - 1);
            input.value = newValue;
            updateColorSection('text');
        }
    });

    document.getElementById('addBgColor')?.addEventListener('click', () => {
        const input = document.getElementById('bgColorAmount');
        if (input) {
            const newValue = Math.min(5, parseInt(input.value) + 1);
            input.value = newValue;
            updateColorSection('bg');
        }
    });

    document.getElementById('removeBgColor')?.addEventListener('click', () => {
        const input = document.getElementById('bgColorAmount');
        if (input) {
            const newValue = Math.max(1, parseInt(input.value) - 1);
            input.value = newValue;
            updateColorSection('bg');
        }
    });

    // Generate initial image
    generateImage();

    // Add event listener for rounded corners
    document.getElementById('roundedCornersSwitch')?.addEventListener('change', generateImage);

    // Add these event listeners after the canvas setup
    // Options event listeners
    document.getElementById('bgDirectionSwitch')?.addEventListener('change', generateImage);
    document.getElementById('textDirectionSwitch')?.addEventListener('change', generateImage);
    document.getElementById('roundedCornersSwitch')?.addEventListener('change', generateImage);
    document.getElementById('textShadowSwitch')?.addEventListener('change', generateImage);

    // Text input event listener (if not already added)
    document.getElementById('textInput')?.addEventListener('input', generateImage);

    // Padding event listeners (if not already added)
    document.getElementById('hPadding')?.addEventListener('input', generateImage);
    document.getElementById('vPadding')?.addEventListener('input', generateImage);

    // Add/remove padding button listeners
    document.getElementById('addHPadding')?.addEventListener('click', () => {
        const input = document.getElementById('hPadding');
        if (input) {
            const newValue = Math.min(10, parseInt(input.value) + 1);
            input.value = newValue;
            hPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('removeHPadding')?.addEventListener('click', () => {
        const input = document.getElementById('hPadding');
        if (input) {
            const newValue = Math.max(0, parseInt(input.value) - 1);
            input.value = newValue;
            hPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('addVPadding')?.addEventListener('click', () => {
        const input = document.getElementById('vPadding');
        if (input) {
            const newValue = Math.min(10, parseInt(input.value) + 1);
            input.value = newValue;
            vPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });

    document.getElementById('removeVPadding')?.addEventListener('click', () => {
        const input = document.getElementById('vPadding');
        if (input) {
            const newValue = Math.max(0, parseInt(input.value) - 1);
            input.value = newValue;
            vPadding = newValue; // Update the variable
            updateCanvasSize();
        }
    });
});
