export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/home-01',
            permanent: false, // Change to true if this is a permanent redirect
        },
    };
}

export default function RedirectToHome() {
    return null;
}
