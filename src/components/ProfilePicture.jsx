import React from "react";

function ProfilePicture({ url }) {
    return (
        <img
            src={
                url ||
                "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/452291604_3941349416187895_1832832890913118263_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEVbeGbiYvKLx8zH3UC35fUjw9zb7VL116PD3NvtUvXXgcVoT4ouEOBb2LsO7zK5A-AFmu6HF6zcIRYCP8Pawai&_nc_ohc=C80M-3NVnPYQ7kNvgGBnodU&_nc_oc=AdgGimLHDdqo5ttPbP4ImJ-7-KLdKitnJ7BzXeV1grIeJm7hIDYaUPXzNTCa3-J_1FM&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=A7DSmWszINKRunnoc6moL5B&oh=00_AYFSaaiNWV2T6VDiKOsrZLF4KXWW6xt0l-X47yTFWJmmBw&oe=67D1D089"
            }
            alt="Profile"
            style={{
                width: "100px", // Adjust the size as needed
                height: "100px",
                borderRadius: "50%", // Makes it a circular profile picture
                objectFit: "cover"
            }}
        />
    );
}

export default ProfilePicture;
