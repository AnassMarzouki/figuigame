export default function Excellent (props) {
    const messageText = ["Congratulations! You've achieved the remarkable feat of being below average. Don't worry, there's always room for improvement...unless you're aiming for mediocrity, then you're right on track!","Well, well, well, look at you! Not bad at all. You've managed to scrape together some knowledge about Figuig's Amazigh Vocabulary. Keep it up, and who knows, maybe one day you'll be almost impressive!","Impressive! You've proven yourself to be quite the connoisseur of Figuig's Amazigh Vocabulary. Your knowledge shines brighter than a Berber gem! Keep embracing the Figuig lifestyle, and soon you'll be teaching the locals a thing or two!","Bow down, peasants! We have a champion among us! You've ascended to the echelons of Figuig's Amazigh Vocabulary mastery. You don't just know the words; you practically embody the essence of Figuig's culture and lifestyle. Kudos to you, oh enlightened one!"]

    return (
        <div>
            <div className="stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p>{messageText[3]}</p>
        </div>
    )

}