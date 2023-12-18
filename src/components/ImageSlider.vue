<script setup lang="ts">
import { ref, computed, onMounted, defineProps, withDefaults } from 'vue';

type ImageSliderProps = {
    images: { src: string; alt: string; }[];
}

const props = withDefaults(defineProps<ImageSliderProps>(), {
    images: () => [],
});

const imageList = ref<HTMLDivElement>();
const sliderScrollbar = ref<HTMLDivElement>();
const scrollbarThumb = ref<HTMLDivElement>();
const prevButton = ref<HTMLElement>();
const nextButton = ref<HTMLElement>();

const maxScrollLeft = computed(() => {
    if (imageList.value) {
        return imageList.value.scrollWidth - imageList.value.clientWidth;
    }

    return 0;
});

const listStyle = computed(() => ({ 'grid-template-columns': `repeat(${props.images.length === 0 ? 1 : props.images.length }, 1fr)` }));

const slide = (direction: number) => {
    if (imageList.value) {
        const scrollAmount = imageList.value.clientWidth * direction;
        imageList.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

const handleSlideButton = () => {
    if (prevButton.value && nextButton.value && imageList.value) {
        prevButton.value.style.display = imageList.value.scrollLeft <= 0 ? 'none' : 'flex'; 
        nextButton.value.style.display = imageList.value.scrollLeft >= maxScrollLeft.value ? 'none' : 'flex'; 
    }
};

const handleThumbPosition = () => {
    if (imageList.value && sliderScrollbar.value && scrollbarThumb.value) {
        const scrollPosition = imageList.value.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft.value) * (sliderScrollbar.value.clientWidth - scrollbarThumb.value.offsetWidth)
        scrollbarThumb.value.style.left = `${thumbPosition}px`;
    }
};

const handleSlider = () => {
    handleSlideButton();
    handleThumbPosition();
}

const scrollThumb = (e: Event) => {
    const startX = (e as MouseEvent).clientX;
    const currentThumbPosition = scrollbarThumb.value?.offsetLeft ?? 0;

    const handleMouseMove = (e: Event) => {
        if (imageList.value && scrollbarThumb.value && sliderScrollbar.value) {
            const deltaX = (e as MouseEvent).clientX - startX;
            const newThumbPosition = currentThumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.value.getBoundingClientRect().width - scrollbarThumb.value.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft.value;

            scrollbarThumb.value.style.left = `${boundedPosition}px`;
            imageList.value.scrollLeft = scrollPosition;

        }
    }
    const handleMouseUp = () => {
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
};

onMounted(() => {
    document.addEventListener('resize', () => {
        handleThumbPosition();
    })
})


</script>

<template>
    <div class="slider-container">
        <div class="slider-wrapper">
            <i id="left-arrow" class="fa-solid fa-angle-left round-button" ref="prevButton" @click="() => slide(-1)"></i>
            <div class="image-list" ref="imageList" @scroll="handleSlider" :style="listStyle">
                <img v-for="image in images" :key="image.alt" :src="image.src" :alt="image.alt" class="list-item" />
            </div>
            <i id="right-arrow" class="fa-solid fa-angle-right round-button" ref="nextButton" @click="slide(1)"></i>
        </div>
        <div class="slider-scrollbar" ref="sliderScrollbar">
            <div class="scrollbar-track">
                <div
                    class="scrollbar-thumb"
                    ref="scrollbarThumb"
                    @mousedown="scrollThumb"
                ></div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.round-button {
    width: 48px;
    height: 48px;
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFF;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
       background: #f0f0f0; 
    }
}
.slider-container {
    max-width: 1280px;
    padding: 0 24px !important;
    width: 100% !important;
    .slider-wrapper {
        margin-bottom: 30px;
        position: relative;

        .round-button {
            position: absolute;
            top: 50%;
        }

        #left-arrow {
            left: -24px;
            transform: translateY(-50%);
            display: none;
        }

        #right-arrow {
            right: -24px;
            transform: translateY(-50%);
        }
        
        .image-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 18px;
            font-size: 0;
            overflow-x: auto;
            
            &::-webkit-scrollbar {
                display: none;
            }

            .list-item {
                width: 550px;
                object-fit: cover;
            }
        }
    }

    .slider-scrollbar {
        height: 24px;
        width: 100%;

        .scrollbar-track {
            height: 2px;
            width: 100%;
            background: #ccc;
            position: relative;
            border-radius: 4px;
        }

        .scrollbar-thumb {
            position: absolute;
            height: 100%;
            width: 50%;
            background: #fff;   
            border-radius: inherit;
            cursor: grab;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                top: -10;
                bottom: -10;
            }
        }

        &:hover {
            .scrollbar-track {
                height: 4px;
            }
        }

        &:active {
            .scrollbar-thumb {
                cursor: grabbing;
                height: 8px;
                top: -2px;
            }
        }

    }
}

@media screen and (max-width: 600px) {
    .image-list .list-item {
        width: 350px !important;
        object-fit: cover;
    }
}
</style>