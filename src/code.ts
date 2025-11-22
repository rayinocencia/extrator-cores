// src/index.ts
//import ColorThief from 'colorthief';
new ColorThief()

const imageInput = document.getElementById('imageInput') as HTMLInputElement;
const uploadedImage = document.getElementById('uploadedImage') as HTMLImageElement;
const placeholder = document.getElementById('placeholder') as HTMLParagraphElement;
const paletteContainer = document.getElementById('paletteContainer') as HTMLDivElement;

const colorThief = new ColorThief();

/**
 * Converte um array RGB para a string CSS.
 * @param rgb Array de [r, g, b]
 * @returns String 'rgb(r, g, b)'
 */
const rgbToCss = (rgb: number[]): string => `rgb(${rgb.join(', ')})`;

/**
 * Cria e insere os blocos de cores na interface.
 * @param palette Array de arrays RGB.
 */
const renderPalette = (palette: number[][]) => {
    paletteContainer.innerHTML = ''; // Limpa resultados anteriores

    palette.forEach(rgb => {
        const colorDiv = document.createElement('div');
        colorDiv.className = 'color-swatch';
        colorDiv.style.backgroundColor = rgbToCss(rgb);
        // Adiciona um tooltip/título com o valor RGB
        colorDiv.title = rgbToCss(rgb);
        paletteContainer.appendChild(colorDiv);
    });
};

/**
 * Manipula a seleção do arquivo e extrai as cores.
 */
imageInput.addEventListener('change', (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    // 1. Carrega a imagem para visualização
    const reader = new FileReader();
    reader.onload = (e) => {
        uploadedImage.src = e.target?.result as string;
        uploadedImage.style.display = 'block';
        placeholder.style.display = 'none';

        // 2. Garante que a imagem está carregada no DOM antes de extrair as cores
        uploadedImage.onload = () => {
            try {
                // Extrai as 5 cores dominantes
                const palette = colorThief.getPalette(uploadedImage, 5);
                renderPalette(palette);
            } catch (error) {
                console.error("Erro ao extrair cores:", error);
                alert("Não foi possível extrair as cores desta imagem.");
            }
        };
    };
    reader.readAsDataURL(file);
});

// A imagem da pré-visualização deve ser configurada para permitir o CORS se for usada em URLs externas.
// Para arquivos locais, isso geralmente não é um problema.