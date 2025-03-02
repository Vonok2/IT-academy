document.addEventListener('DOMContentLoaded', () => { //Ждем полной загрузки страницы

	const heart = document.querySelector('.heart');
	const word = document.querySelector('.word');

	// Анимация появления сердца (масштаб и изменение цвета)
	gsap.fromTo(heart, { scale: 0, backgroundColor: "#ffe6f2" }, {
			scale: 1,
			backgroundColor: "#ffb3d9",
			duration: 1.5,
			ease: "elastic.out(1, 0.3)", // Плавный эффект "пружины"
			onComplete: () => { //После завершения анимации сердца запускаем анимацию слова
					// Анимация появления слова (прозрачность и перемещение)
					gsap.to(word, {
							opacity: 1,
							y: -20, // Небольшое смещение вверх
							duration: 1,
							ease: "power2.out",
					});
					// ... (предыдущий код)

onComplete: () => {
	// Анимация появления слова
	gsap.to(word, {
			opacity: 1,
			y: -20,
			duration: 1,
			ease: "power2.out",
	});

	// Создание частиц
	createParticles(heart);
}

// ... (остальной код)

function createParticles(element) {
	const particlesContainer = element.querySelector('.particles');
	const numberOfParticles = 20; // Количество частиц

	for (let i = 0; i < numberOfParticles; i++) {
			const particle = document.createElement('div');
			particle.classList.add('particle');
			particlesContainer.appendChild(particle);

			// Случайная позиция и анимация для каждой частицы
			const x = Math.random() * 100 - 50; // Случайное положение по X (-50px до 50px)
			const y = Math.random() * 100 - 50; // Случайное положение по Y (-50px до 50px)
			const scale = Math.random() * 0.8 + 0.2; // Случайный размер (от 0.2 до 1)
			const rotation = Math.random() * 360; // Случайный угол поворота
			const duration = Math.random() * 0.8 + 0.5; // Случайная длительность анимации

			gsap.to(particle, {
					x: x,
					y: y,
					scale: scale,
					rotation: rotation,
					opacity: 0,
					duration: duration,
					ease: "power2.out",
					onComplete: () => {
							particle.remove(); // Удаляем частицу после анимации
					}
			});
	}
}
			}
	});

});