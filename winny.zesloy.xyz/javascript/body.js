async function configPath() {
    try {
        const response = await fetch("./config.json");
        const config = await response.json();
        const backgroundBody = config.backgroundBody || "";
        document.body.style.backgroundImage = `url('${backgroundBody}')`;

        const BannerProfile = config.BannerProfile || "";
        const bannerElement = document.querySelector('.banner');
        if (bannerElement) {
            bannerElement.style.backgroundImage = `url('${BannerProfile}')`;
        }

      
        const Profile = config.Profile || "";
        const ProfileElement = document.querySelector('.profile-pic');
        if (ProfileElement) {
            ProfileElement.style.backgroundImage = `url('${Profile}')`;
        }


        const Profileframe = config.Profileframe || "";
        const ProfileframeElement = document.querySelector('.profile-frame');
        if (ProfileframeElement) {
            ProfileframeElement.style.backgroundImage = `url('${Profileframe}')`;
        }


        const Profileframebanner = config.ProfileframeBanner || "";
        const ProfileframebannerElement = document.querySelector('.profile-frame-banner');
        if (ProfileframebannerElement) {
            ProfileframebannerElement.style.backgroundImage = `url('${Profileframebanner}')`;
        }


        const favicon = config.favicon || "";
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = favicon;
        document.head.appendChild(link);


    } catch (error) {
        console.error("❌ Error loading config.json:", error);
    }
}

configPath();