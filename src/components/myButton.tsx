// eslint-disable-next-line @typescript-eslint/no-unused-vars
'use client'
const MyButton = () => {
    
    const handleClick = () => {
        alert("Button clicked!");
    };
    
    return (
        <div>
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600" onClick={handleClick}>
            Click me
        </button>
        </div>
    );
};

export default MyButton;
