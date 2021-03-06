import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { CardDetail, cardEmpty, CardSet } from "../components/CauldronTypes";
import { useState } from "react";

const Home: React.FC = () => {
  const saveJson = (filename: string, jsonSource: {}) => {
    const json = JSON.stringify(jsonSource);

    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:application/json;charset=utf-8," + encodeURIComponent(json)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const filename = "cardset.json";

  const downloadCardSet = (cardset: CardSet) => saveJson(filename, cardset);

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  const [cardIndex, setCardIndex] = useState(0);
  const [cardset, setCardset] = useState({
    name: "",
    cards: [newCard(cardIndex)],
  } as CardSet);

  const handleCardSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCardIndex(Number(e.target.value));
  };

  const handleCardChange = (newValue: Partial<CardDetail>) => {
    console.log(newValue);

    setCardset((oldCardset) => {
      oldCardset.cards[cardIndex] = {
        ...oldCardset.cards[cardIndex],
        ...newValue,
      };
      return { ...oldCardset, cards: [...oldCardset.cards] };
    });
  };

  const handleAddCardButtonClick = () => {
    setCardset((oldCardset) => {
      return {
        ...oldCardset,
        cards: [...oldCardset.cards, newCard(cardset.cards.length)],
      };
    });

    // 追加したカードを選択する
    setCardIndex(cardset.cards.length);
  };

  const handleDeleteCardButtonClick = () => {
    if (cardset.cards.length === 1) {
      return;
    }

    const deleteIndex = cardIndex;

    if (deleteIndex === cardset.cards.length - 1) {
      setCardIndex(deleteIndex - 1);
    }

    setCardset((oldCardset) => {
      const newCardset = [...oldCardset.cards];
      newCardset.splice(deleteIndex, 1);

      return { ...oldCardset, cards: newCardset };
    });
  };

  const handleCardsetNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardset((prev) => {
      return { ...prev, name: e.target.value };
    });
  };

  const AddCardButton = () => (
    <button onClick={handleAddCardButtonClick}>+</button>
  );
  const DeleteCardButton = () => (
    <button onClick={handleDeleteCardButtonClick}>-</button>
  );
  const DownloadButton = () => (
    <button onClick={() => downloadCardSet(cardset)}>ダウンロード</button>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Cauldron - カード作成ツール</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cauldron - カード作成ツール</h1>
        <span>
          <input
            type="text"
            value={cardset.name}
            onChange={handleCardsetNameChange}
          />
          <select value={cardIndex} onChange={handleCardSelect}>
            {cardset.cards.map((elm, index) => (
              <option key={index} value={index}>
                {elm.name}
              </option>
            ))}
          </select>
          <AddCardButton></AddCardButton>
          <DeleteCardButton></DeleteCardButton>
          <DownloadButton></DownloadButton>
        </span>
        <Card
          detail={cardset.cards[cardIndex]}
          onChanged={handleCardChange}
        ></Card>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
