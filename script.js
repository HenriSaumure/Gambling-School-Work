// Base de données des devoirs par matière et rareté
const homeworkDatabase = {
    francais: {
        common: [
            { name: "Exercices Grammaire", grade: "C+", icon: "fas fa-pencil-alt", value: 8.99 },
            { name: "Résumé de Texte", grade: "C", icon: "fas fa-file-alt", value: 12.50 },
            { name: "Dictée Préparée", grade: "B-", icon: "fas fa-spell-check", value: 9.99 }
        ],
        rare: [
            { name: "Analyse Poétique", grade: "B+", icon: "fas fa-feather", value: 25.99 },
            { name: "Commentaire Littéraire", grade: "B", icon: "fas fa-book-open", value: 32.50 },
            { name: "Expression Écrite", grade: "A-", icon: "fas fa-pen-fancy", value: 28.75 }
        ],
        "ultra-rare": [
            { name: "Dissertation Française", grade: "A", icon: "fas fa-scroll", value: 55.00 },
            { name: "Analyse Stylistique", grade: "A", icon: "fas fa-feather-alt", value: 48.99 }
        ],
        epic: [
            { name: "Essai Critique Avancé", grade: "A+", icon: "fas fa-crown", value: 89.99 },
            { name: "Mémoire Littéraire", grade: "A+", icon: "fas fa-trophy", value: 95.50 }
        ],
        legendary: [
            { name: "Thèse sur Proust", grade: "A+", icon: "fas fa-medal", value: 199.99 },
            { name: "Analyse Complète Molière", grade: "A+", icon: "fas fa-star", value: 250.00 }
        ]
    },
    mathematiques: {
        common: [
            { name: "Exercices Algèbre", grade: "C+", icon: "fas fa-plus", value: 7.99 },
            { name: "Problèmes Arithmétique", grade: "C", icon: "fas fa-calculator", value: 10.50 },
            { name: "Géométrie Basic", grade: "B-", icon: "fas fa-shapes", value: 11.99 }
        ],
        rare: [
            { name: "Calcul Différentiel", grade: "B+", icon: "fas fa-function", value: 29.99 },
            { name: "Statistiques Avancées", grade: "B", icon: "fas fa-chart-bar", value: 35.50 },
            { name: "Trigonométrie", grade: "A-", icon: "fas fa-sine-wave", value: 31.75 }
        ],
        "ultra-rare": [
            { name: "Analyse Complexe", grade: "A", icon: "fas fa-infinity", value: 59.00 },
            { name: "Calcul Intégral", grade: "A", icon: "fas fa-integral", value: 52.99 }
        ],
        epic: [
            { name: "Topologie Algébrique", grade: "A+", icon: "fas fa-project-diagram", value: 99.99 },
            { name: "Théorie des Nombres", grade: "A+", icon: "fas fa-hashtag", value: 105.50 }
        ],
        legendary: [
            { name: "Preuve Théorème Fermat", grade: "A+", icon: "fas fa-medal", value: 299.99 },
            { name: "Mémoire sur Euler", grade: "A+", icon: "fas fa-award", value: 350.00 }
        ]
    },
    anglais: {
        common: [
            { name: "Grammar Exercises", grade: "C+", icon: "fas fa-language", value: 8.50 },
            { name: "Vocabulary Test", grade: "C", icon: "fas fa-spell-check", value: 9.99 },
            { name: "Simple Conversation", grade: "B-", icon: "fas fa-comments", value: 12.50 }
        ],
        rare: [
            { name: "Shakespeare Analysis", grade: "B+", icon: "fas fa-theater-masks", value: 28.99 },
            { name: "Business English", grade: "B", icon: "fas fa-briefcase", value: 33.50 },
            { name: "Advanced Grammar", grade: "A-", icon: "fas fa-language", value: 30.75 }
        ],
        "ultra-rare": [
            { name: "Literary Criticism", grade: "A", icon: "fas fa-book-reader", value: 56.00 },
            { name: "Academic Writing", grade: "A", icon: "fas fa-graduation-cap", value: 51.99 }
        ],
        epic: [
            { name: "Thesis on Dickens", grade: "A+", icon: "fas fa-crown", value: 92.99 },
            { name: "Comparative Literature", grade: "A+", icon: "fas fa-trophy", value: 98.50 }
        ],
        legendary: [
            { name: "Cambridge Dissertation", grade: "A+", icon: "fas fa-medal", value: 279.99 },
            { name: "Oxford Essay Perfect", grade: "A+", icon: "fas fa-star", value: 320.00 }
        ]
    },
    philosophie: {
        common: [
            { name: "Introduction Logique", grade: "C+", icon: "fas fa-brain", value: 9.99 },
            { name: "Éthique Basique", grade: "C", icon: "fas fa-balance-scale", value: 11.50 },
            { name: "Histoire Philo", grade: "B-", icon: "fas fa-history", value: 13.99 }
        ],
        rare: [
            { name: "Essai sur Descartes", grade: "B+", icon: "fas fa-lightbulb", value: 31.99 },
            { name: "Critique de Kant", grade: "B", icon: "fas fa-thinking", value: 36.50 },
            { name: "Métaphysique", grade: "A-", icon: "fas fa-atom", value: 33.75 }
        ],
        "ultra-rare": [
            { name: "Phénoménologie", grade: "A", icon: "fas fa-eye", value: 58.00 },
            { name: "Existentialisme", grade: "A", icon: "fas fa-user-astronaut", value: 54.99 }
        ],
        epic: [
            { name: "Thèse sur Nietzsche", grade: "A+", icon: "fas fa-crown", value: 95.99 },
            { name: "Herméneutique", grade: "A+", icon: "fas fa-trophy", value: 101.50 }
        ],
        legendary: [
            { name: "Critique Raison Pure", grade: "A+", icon: "fas fa-medal", value: 389.99 },
            { name: "Somme Philosophique", grade: "A+", icon: "fas fa-star", value: 450.00 }
        ]
    },
    sciences: {
        common: [
            { name: "Chimie Organique", grade: "C+", icon: "fas fa-flask", value: 8.99 },
            { name: "Physique Mécanique", grade: "C", icon: "fas fa-cog", value: 10.50 },
            { name: "Biologie Cellulaire", grade: "B-", icon: "fas fa-dna", value: 12.99 }
        ],
        rare: [
            { name: "Thermodynamique", grade: "B+", icon: "fas fa-thermometer-half", value: 30.99 },
            { name: "Génétique Avancée", grade: "B", icon: "fas fa-microscope", value: 35.50 },
            { name: "Électromagnétisme", grade: "A-", icon: "fas fa-magnet", value: 32.75 }
        ],
        "ultra-rare": [
            { name: "Physique Quantique", grade: "A", icon: "fas fa-atom", value: 57.00 },
            { name: "Biochimie Moléculaire", grade: "A", icon: "fas fa-molecular", value: 53.99 }
        ],
        epic: [
            { name: "Relativité Générale", grade: "A+", icon: "fas fa-crown", value: 97.99 },
            { name: "Recherche Nobel", grade: "A+", icon: "fas fa-trophy", value: 103.50 }
        ],
        legendary: [
            { name: "Théorie du Tout", grade: "A+", icon: "fas fa-medal", value: 499.99 },
            { name: "Découverte Scientifique", grade: "A+", icon: "fas fa-star", value: 599.00 }
        ]
    }
};

// Probabilités par rareté
const rarityProbabilities = {
    common: 60,      // 60%
    rare: 25,        // 25%
    "ultra-rare": 10, // 10%
    epic: 4,         // 4%
    legendary: 1     // 1%
};

document.addEventListener('DOMContentLoaded', function() {
    // S'assurer que le solde est correctement initialisé
    initializeBalance();
    
    // Gestion de la navigation (code existant simplifié)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Gestion des filtres du marketplace
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Gestion de l'ouverture des coffres avec confirmation et spin
    const openButtons = document.querySelectorAll('.lootbox-card .btn-primary');
    
    openButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.lootbox-card');
            const price = parseFloat(card.querySelector('.price').textContent.replace('CAD$', ''));
            const boxName = card.querySelector('h3').textContent;
            
            showConfirmationModal(boxName, price, () => {
                startSpinSequence(price);
            });
        });
    });

    // Gestion des achats sur le marketplace
    const buyButtons = document.querySelectorAll('.marketplace-item .btn-secondary');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.marketplace-item');
            const itemName = item.querySelector('h4').textContent;
            const itemPrice = parseFloat(item.querySelector('.current-price').textContent.replace('CAD$', ''));
            
            this.textContent = 'Achat...';
            this.disabled = true;
            
            setTimeout(() => {
                showPurchaseConfirmation(itemName, itemPrice);
                this.textContent = 'Acheter';
                this.disabled = false;
                updateBalance(-itemPrice);
            }, 1000);
        });
    });
});

function showConfirmationModal(boxName, price, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'confirmation-modal';
    modal.innerHTML = `
        <div class="confirmation-content">
            <h3>Confirmer l'ouverture</h3>
            <p>Voulez-vous ouvrir le <strong>${boxName}</strong> pour <strong>${price.toFixed(2)} CAD$</strong> ?</p>
            <div class="confirmation-actions">
                <button class="btn btn-secondary" onclick="closeConfirmationModal()">Annuler</button>
                <button class="btn btn-primary" onclick="confirmPurchase()">Confirmer</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Stocker la fonction de callback
    window.currentConfirmCallback = onConfirm;
    window.currentConfirmPrice = price;
    
    setTimeout(() => modal.classList.add('show'), 100);
}

function closeConfirmationModal() {
    const modal = document.querySelector('.confirmation-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => document.body.removeChild(modal), 300);
    }
}

function confirmPurchase() {
    closeConfirmationModal();
    updateBalance(-window.currentConfirmPrice);
    
    if (window.currentConfirmCallback) {
        window.currentConfirmCallback();
    }
}

function startSpinSequence(price) {
    // Déterminer d'abord l'objet gagnant - Toujours "Vocabulary Test"
    const winningItem = determineWinningItem();
    console.log("Item gagnant:", winningItem);
    
    // Générer des objets avec duplication pour un effet de boucle visuelle
    const baseItems = generateSpinItems(50); // 50 objets de base uniques
    const spinItems = [];
    
    // Créer 4 copies de chaque objet de base pour avoir 200 objets au total
    for (let i = 0; i < 200; i++) {
        const baseItem = baseItems[i % baseItems.length];
        spinItems.push({
            ...baseItem,
            value: baseItem.value * (0.95 + Math.random() * 0.1),
            uniqueId: i
        });
    }
    
    // Placer l'objet gagnant à une position spécifique (vers la fin pour plus de suspense)
    const winningIndex = 180 + Math.floor(Math.random() * 15); // Position finale entre 180-195
    spinItems[winningIndex] = {
        ...winningItem,
        value: winningItem.value,
        uniqueId: winningIndex
    };
    
    // Vérifier que l'objet gagnant est bien placé
    console.log("Élément à l'index gagnant:", spinItems[winningIndex]);
    
    showSpinModal(spinItems, winningIndex, winningItem);
}

function generateSpinItems(count) {
    const items = [];
    const subjects = Object.keys(homeworkDatabase);
    
    for (let i = 0; i < count; i++) {
        const rarity = selectRandomRarity();
        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        const homeworkList = homeworkDatabase[subject][rarity];
        const homework = homeworkList[Math.floor(Math.random() * homeworkList.length)];
        
        items.push({
            ...homework,
            rarity: rarity,
            subject: subject
        });
    }
    
    return items;
}

function selectRandomRarity() {
    const rand = Math.random() * 100;
    let cumulative = 0;
    
    for (const [rarity, probability] of Object.entries(rarityProbabilities)) {
        cumulative += probability;
        if (rand <= cumulative) {
            return rarity;
        }
    }
    
    return 'common';
}

function determineWinningItem() {
    // Toujours retourner "Vocabulary Test" de la matière anglais avec rareté commune
    // comme spécifié dans les exigences
    return {
        name: "Vocabulary Test",
        grade: "C",
        icon: "fas fa-spell-check",
        value: 9.99,
        rarity: 'common',
        subject: 'anglais'
    };
}

function getRandomRareItem() {
    const rarity = 'rare';
    const subjects = Object.keys(homeworkDatabase);
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const homeworkList = homeworkDatabase[subject][rarity];
    const homework = homeworkList[Math.floor(Math.random() * homeworkList.length)];
    
    return {
        ...homework,
        rarity: rarity,
        subject: subject
    };
}

function showSpinModal(items, winningIndex, winningItem) {
    const modal = document.createElement('div');
    modal.className = 'spin-modal';
    
    const repetitions = 10; // Dupliquer les items 10 fois pour couvrir le scroll
    let wheelHTML = '';
    for (let rep = 0; rep < repetitions; rep++) {
        wheelHTML += items.map(item => `
            <div class="spin-item ${item.rarity}">
                <i class="${item.icon}"></i>
                <div class="spin-item-name">${item.name}</div>
                <div class="spin-item-grade">${item.grade}</div>
            </div>
        `).join('');
    }
    
    modal.innerHTML = `
        <div class="spin-container">
            <h2 class="spin-title">Ouverture du Coffre de Devoirs</h2>
            <div class="spin-wheel-container">
                <div class="spin-pointer"></div>
                <div class="spin-wheel" id="spinWheel">
                    ${wheelHTML}
                </div>
            </div>
            <div class="spin-result" id="spinResult">
                <div class="result-item">
                    <i class="${winningItem.icon}"></i>
                    <div class="result-details">
                        <h3>${winningItem.name}</h3>
                        <p>Matière: ${winningItem.subject.charAt(0).toUpperCase() + winningItem.subject.slice(1)}</p>
                        <p>Note: ${winningItem.grade}</p>
                        <p>Rareté: ${winningItem.rarity}</p>
                        <div class="result-value">${winningItem.value.toFixed(2)} CAD$</div>
                    </div>
                </div>
                <button class="btn btn-primary" onclick="closeSpinModal()">Continuer</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Démarrer le spin après un court délai
    setTimeout(() => {
        startSpin(winningIndex, items, repetitions, winningItem);
    }, 500);
}

function startSpin(winningIndex, items, repetitions, winningItem) {
    // Jouer le son du spin
    const spinSound = new Audio('assets/sound.mp3');
    spinSound.play().catch(e => console.log('Erreur de lecture audio:', e));
    
    const wheel = document.getElementById('spinWheel');
    const itemWidth = 150; // Largeur de chaque item
    
    // Calculer la position finale pour centrer sur l'item gagnant
    const containerCenter = 450; // Centre du conteneur de 900px
    const finalPosition = -(winningIndex * itemWidth - containerCenter);
    
    // Calculer la largeur totale de la roue
    const wheelWidth = items.length * itemWidth * repetitions;
    
    // Augmenter le nombre de tours pour un effet plus impressionnant
    const extraSpins = itemWidth * items.length * repetitions * 3; // 3 tours complets
    const totalRotation = finalPosition - extraSpins;
    
    // Utiliser requestAnimationFrame pour une animation plus fluide
    wheel.style.transition = 'none';
    
    // Variables pour l'animation optimisée
    let startTime = null;
    const duration = 8000; // Durée exacte de 8 secondes pour le spin
    const startPosition = 0;
    let animationId = null;
    
    wheel.style.willChange = 'transform';
    
    function animate(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Courbe d'easing plus lente à la fin
        const easeOut = 1 - Math.pow(1 - progress, 5); // Exposant augmenté pour ralentir davantage à la fin
        const targetPosition = startPosition + (totalRotation - startPosition) * easeOut;
        
        // Appliquer le looping pour un effet sans fin
        let effectivePosition = targetPosition % wheelWidth;
        if (effectivePosition > 0) effectivePosition -= wheelWidth;
        
        wheel.style.transform = `translate3d(${effectivePosition}px, 0, 0)`;
        
        if (progress < 1) {
            animationId = requestAnimationFrame(animate);
        } else {
            // Animation terminée, positionner exactement sur l'item gagnant
            wheel.style.transform = `translate3d(${finalPosition}px, 0, 0)`;
            wheel.style.willChange = 'auto';
            
            // Afficher le résultat après un délai pour un effet plus dramatique
            setTimeout(() => {
                document.getElementById('spinResult').classList.add('show');
            }, 500);
        }
    }
    
    animationId = requestAnimationFrame(animate);
    window.currentSpinAnimation = animationId;
}

function closeSpinModal() {
    const modal = document.querySelector('.spin-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
}

function showPurchaseConfirmation(itemName, price) {
    const notification = document.createElement('div');
    notification.className = 'purchase-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>Achat réussi: ${itemName} pour ${price.toFixed(2)} CAD$</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function updateBalance(amount) {
    const balanceElement = document.querySelector('.balance span');
    const currentBalanceText = balanceElement.textContent.replace('CAD$', '').replace(/\s/g, '').replace(',', '.');
    const currentBalance = parseFloat(currentBalanceText);
    const newBalance = Math.max(0, currentBalance + amount); // Empêcher le solde négatif
    
    // Format avec le séparateur de milliers
    const formattedBalance = new Intl.NumberFormat('fr-CA', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }).format(newBalance);
    
    balanceElement.style.transform = 'scale(1.2)';
    balanceElement.style.color = amount > 0 ? '#27ae60' : '#e74c3c';
    
    setTimeout(() => {
        balanceElement.textContent = formattedBalance + ' CAD$';
        
        // Mettre à jour l'affichage du solde dans la console pour débogage
        console.log('Nouveau solde:', formattedBalance + ' CAD$');
        
        setTimeout(() => {
            balanceElement.style.transform = 'scale(1)';
            balanceElement.style.color = 'white';
        }, 500);
    }, 200);
}

// Animation de comptage pour les statistiques (code existant adapté)
function animateCounters() {
    const counters = document.querySelectorAll('.stat-card h3');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
                let current = 0;
                const increment = target / 100;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = formatNumber(Math.floor(current));
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = formatNumber(target);
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}

function initializeBalance() {
    const balanceElement = document.querySelector('.balance span');
    const initialBalance = 1000.00;
    
    // Format avec le séparateur de milliers
    const formattedBalance = new Intl.NumberFormat('fr-CA', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }).format(initialBalance);
    
    balanceElement.textContent = formattedBalance + ' CAD$';
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(0) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString();
}

// Démarrer l'animation des compteurs
document.addEventListener('DOMContentLoaded', animateCounters);

// Effet de parallaxe et header scroll (code existant)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});