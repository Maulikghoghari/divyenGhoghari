import Image from "next/image";

export default function AboutInfo() {
    return (
        <div className="about-content position-relative mb-50">
            <div className="position-relative">
                <div className="title">
                    <span className="theme-color text-uppercase d-block mb-1 mt--5">
                        About Me
                    </span>
                    <h2 className="mb-30">I Build Scalable Android Apps</h2>
                </div>
            </div>
            <p className="mb-25">
                Hi, I&apos;m Divyen! I am a passionate Android Developer dedicated to building performant, user-centric, and robust mobile applications. With strong expertise in modern Android development (Kotlin, MVVM, Jetpack Compose), I transform ideas into seamless digital experiences.
            </p>
            <p>Ready to build something amazing together?</p>
            <div className="about-info-wrapper pt-25 pb-20 mt-25">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Name
                                </p>
                                <p className="mb-6">Divyen Ghoghari</p>

                                <p className="jostMedium-font-family mb-6">
                                    Age
                                </p>
                                <p className="mb-6">23</p>

                                <p className="jostMedium-font-family mb-6">
                                    Occupation
                                </p>
                                <p className="mb-6">Android Developer</p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 col-12">
                        <ul className="about-info">
                            <li className="d-inline-block pr-50">
                                <p className="jostMedium-font-family mb-6">
                                    Phone
                                </p>
                                <p className="mb-6">9712518848</p>

                                <p className="jostMedium-font-family mb-6">
                                    Email
                                </p>
                                <p className="mb-6">divyenghoghari618@gmail.com</p>

                                <p className="jostMedium-font-family mb-6">
                                    Nationality
                                    <p className="mb-6">Surat, Gujarat</p>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
