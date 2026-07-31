import '../styles/Hero.css'

interface HeroProperties {
  imageURL: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Hero({ imageURL, title, subtitle, description }: HeroProperties) {
  const backgroundStyle = { backgroundImage: `url(${imageURL})` };

  return (
    <section className="hero" style={backgroundStyle}>
      <div className="hero-overlay" />
      <div className="hero-content" >
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}