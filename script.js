function productApp() {
            return {
                products: [
                    { 
                        id: 1, 
                        name: 'Chip Ultra Rápido', 
                        price: 49.90, 
                        image: './img/images.jpg', 
                        description: 'Ideal para quem busca alta velocidade de conexão com tecnologia 5G avançada.' 
                    },
                    { 
                        id: 2, 
                        name: 'Chip Econômico', 
                        price: 29.90, 
                        image: './img/images.jpg', 
                        description: 'A melhor opção para economizar sem perder a qualidade. Plano básico com ótimo custo-benefício.' 
                    },
                    { 
                        id: 3, 
                        name: 'Chip Internacional', 
                        price: 99.90, 
                        image: './img/images.jpg', 
                        description: 'Mantenha-se conectado em suas viagens ao exterior. Roaming internacional incluído.' 
                    },
                    { 
                        id: 4, 
                        name: 'Chip Família', 
                        price: 79.90, 
                        image: './img/images.jpg', 
                        description: 'Compartilhe dados com toda a família. Até 4 linhas no mesmo plano.' 
                    },
                    { 
                        id: 5, 
                        name: 'Chip Gamer', 
                        price: 69.90, 
                        image: './img/images.jpg', 
                        description: 'Baixa latência e alta performance para seus jogos. Prioridade na rede para gaming.' 
                    },
                    { 
                        id: 6, 
                        name: 'Chip Empresarial', 
                        price: 129.90, 
                        image: './img/images.jpg', 
                        description: 'Solução completa para empresas com suporte 24/7 e dados ilimitados.' 
                    },
                    { 
                        id: 7, 
                        name: 'Chip doce', 
                        price: 130.90, 
                        image: './img/images.jpg', 
                        description: 'doce doce doce' 
                    }
                    
                ],
                searchTerm: '',
                filteredProducts: [],
                selectedProduct: null,
                isLoading: false,

                init() {
                    this.filteredProducts = this.products;
                    // Animar entrada dos produtos com delay
                    this.$nextTick(() => {
                        this.animateProductsEntrance();
                    });
                },

                animateProductsEntrance() {
                    const productItems = document.querySelectorAll('.product-item');
                    productItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.animationDelay = `${index * 0.1}s`;
                            item.style.opacity = '1';
                        }, index * 100);
                    });
                },

                filterProducts() {
                    this.isLoading = true;
                    
                    // Simular um pequeno delay para mostrar transição
                    setTimeout(() => {
                        this.filteredProducts = this.products.filter(product => {
                            return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
                        });
                        this.isLoading = false;
                        
                        // Re-animar produtos filtrados
                        this.$nextTick(() => {
                            this.animateProductsEntrance();
                        });
                    }, 200);
                },

                selectProduct(product) {
                    // Adicionar efeito de "loading" antes de selecionar
                    this.isLoading = true;
                    
                    setTimeout(() => {
                        this.selectedProduct = product;
                        this.isLoading = false;
                        
                        // Scroll suave para os detalhes do produto
                        this.$nextTick(() => {
                            const detailsElement = document.querySelector('.product-details');
                            if (detailsElement) {
                                detailsElement.scrollIntoView({ 
                                    behavior: 'smooth', 
                                    block: 'center' 
                                });
                            }
                        });
                    }, 300);
                },

                formatPrice(price) {
                    return price.toFixed(2).replace('.', ',');
                }
            }
        }

        // Adicionar efeitos de partículas no fundo
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
        });

        function createParticles() {
            const particlesContainer = document.createElement('div');
            particlesContainer.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            `;
            document.body.appendChild(particlesContainer);

            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 2}s;
                `;
                particlesContainer.appendChild(particle);
            }

            // Adicionar CSS para animação das partículas
            const style = document.createElement('style');
            style.textContent = `
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.5;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }