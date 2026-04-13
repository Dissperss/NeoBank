import { Section } from '@/shared/ui/section'
import { useNews } from '../hooks/useNews'
import { Container } from '@/shared/ui/container'
import { Slider } from './slider/Slider'
import { SliderSwapper } from './sliderSwapper'
import styles from './News.module.css'
import { useSlider } from '../hooks'

export const News = () => {
    const { news, isLoading, errorText, fetchNews } = useNews()
    const { currentIndex, maxIndex, handleNext, handlePrev } = useSlider(
        news?.length ?? 0,
    )

    return (
        <Section className={styles.news__section}>
            <Container>
                <h2 className={styles.news__title}>
                    Current news from the world of finance
                </h2>
                <h3 className={styles.news__subtitle}>
                    We update the news feed every 15 minutes. You can learn more
                    by clicking on the news you are interested in.
                </h3>
                <div className={styles.news__block}>
                    <Slider
                        news={news}
                        isLoading={isLoading}
                        errorText={errorText}
                        fetchNews={fetchNews}
                        currentIndex={currentIndex}
                    />
                    <SliderSwapper
                        currentIndex={currentIndex}
                        maxIndex={maxIndex}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                </div>
            </Container>
        </Section>
    )
}
