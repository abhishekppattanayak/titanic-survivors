
export default function About() {
    return(
        <div className="h-full w-2/3 mx-auto text-2xl">
            <h1 className="text-4xl font-bold text-center">About Me</h1>
            <p className="text-center my-8">
            Hi👋! This webpage is Titanic Survivors Prediction webpage. On the homepage, you have to enter the details of a passenger and predict whether they have survived or not. This is website is made for education purposes only. The project is under MIT License.
            </p>
            <p className="text-center my-8">
                Author: <a className="text-blue-700" href="https://github.com/abhishekppattanayak">Abhishek Pattanayak</a>
            </p>
            <h1 className="text-4xl font-bold text-center">Attributions</h1>
            <ol className="text-center my-4">
                <li><a href="https://www.flaticon.com/free-animated-icons/ship" title="ship animated icons">Ship animated icons created by Freepik - Flaticon</a></li>
            </ol>
            <p className="text-center">Copyright &copy; 2024 abhishek pattanayak</p>
        </div>
    )
};