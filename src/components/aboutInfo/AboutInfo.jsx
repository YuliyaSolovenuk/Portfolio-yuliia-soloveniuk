import css from './AboutInfo.module.css';
import photoAbout from '../../images/photo_yuliia.jpg'

const AboutInfo = () => {
  return (
    <section className={css.aboutInfoSection}>
    <div className={css.aboutInfoWrapper}>
      <img className={css.aboutImg} src={photoAbout} alt={"Yuliia Soloveniuk"} width={400} />
      <p className={css.aboutInfoText}>
        Hello! My name is Yuliia Soloveniuk. I'm from Ukrain. As a dedicated
        developer, I am enthusiastic about leveraging my diverse skill set in
        the workplace to achieve career growth in the field. My goal is to
        contribute to engaging projects within a positive, friendly team that
        values high-quality work and a responsible approach. I am committed to
        maintaining a professional demeanor in all aspects. I am eager to apply
        my expertise and collaborate with like-minded professionals to create
        impactful solutions and contribute to the success of the team and
        projects!
      </p>
    </div>
    </section>
  );
};

export default AboutInfo;
