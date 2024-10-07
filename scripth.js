function showContact() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Contact Us</h2>
        <p><strong>MUHIB:</strong> 7208625434</p>
        <p><strong>CHIRAG:</strong> 7021539673</p>
        <p><strong>AMAAN:</strong> 81049539665</p>
        <p><strong>SHAFIQUE:</strong> 9702383563</p>
    `;
}

function showCourses() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Available Courses</h2>
        ${createCourseBox("CCNA")}
        ${createCourseBox("ASA")}
        ${createCourseBox("CP")}
        ${createCourseBox("PALO ALTO")}
        ${createCourseBox("VPN")}
        ${createCourseBox("WSA")}
        ${createCourseBox("ESA")}
        ${createCourseBox("FTD")}
        ${createCourseBox("PYTHON")}
        ${createCourseBox("C LANGUAGE")}
        ${createCourseBox("C++")}
        ${createCourseBox("SQL")}
        ${createCourseBox("LINUX")}
        ${createCourseBox("KALI LINUX")}
    `;
}

function createCourseBox(courseName) {
    return `
        <div class="course-box" onclick="showCourseInfo('${courseName}')">
            ${courseName}
        </div>
    `;
}

function showCourseInfo(courseName) {
    let description = "";
    switch(courseName) {
        case "CCNA":
            description = "CCNA (Cisco Certified Network Associate) is a certification for network engineers.";
            break;
        case "ASA":
            description = "ASA (Adaptive Security Appliance) is a network security device.";
            break;
        case "CP":
            description = "CP (Cybersecurity Professional) focuses on protecting networks.";
            break;
        case "PALO ALTO":
            description = "Palo Alto Networks offers advanced firewalls and security solutions.";
            break;
        case "VPN":
            description = "VPN (Virtual Private Network) ensures secure connections over the internet.";
            break;
        case "WSA":
            description = "WSA (Web Security Appliance) protects users from web threats.";
            break;
        case "ESA":
            description = "ESA (Email Security Appliance) protects email systems from threats.";
            break;
        case "FTD":
            description = "FTD (Firepower Threat Defense) combines firewall, IPS, and malware protection.";
            break;
        case "PYTHON":
            description = "Python is a high-level programming language used for various applications.";
            break;
        case "C LANGUAGE":
            description = "C is a powerful general-purpose programming language.";
            break;
        case "C++":
            description = "C++ is an extension of C that includes object-oriented features.";
            break;
        case "SQL":
            description = "SQL (Structured Query Language) is used for managing databases.";
            break;
        case "LINUX":
            description = "Linux is an open-source operating system.";
            break;
        case "KALI LINUX":
            description = "Kali Linux is a distribution designed for penetration testing.";
            break;
        default:
            description = "Course description not available.";
    }
    document.getElementById('content').innerHTML += `
        <div class="course-info">
            <h3>${courseName}</h3>
            <p>${description}</p>
        </div>
    `;
}

function showInstagram() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Follow Us on Instagram</h2>
        <p>Join us on Instagram for more updates!</p>
        <a href="https://instagram.com/ciphercraftaccademy" target="_blank">@ciphercraftaccademy</a>
    `;
}
