import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { CardDetail, cardEmpty } from "../types/CardDetail";
import { CardSetDetail } from "../types/CardSetDetail";
import { getCardMetaData, globalCache } from "../components/CauldronApi";
import {
  Button,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import GetAppIcon from "@material-ui/icons/GetApp";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(1),
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
    "min-height": "100vh",
    padding: "0 1rem",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "left",
    "align-items": "flex-start",
  },

  main: {
    padding: "1rem 0",
    flex: 1,
    display: "flex",
    "flex-direction": "column",
    "justify-content": "left",
    "align-items": "flex-start",
  },
}));

async function LoadMetadata() {
  const metadata = await getCardMetaData();
  globalCache.metadata = metadata;

  console.log(globalCache.metadata);
}

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const filename = "cardset.json";

  const newCard = (index: number) => {
    const newCard = cardEmpty();
    newCard.name = `カード${index}`;

    return newCard;
  };

  const [cardIndex, setCardIndex] = useState(0);
  const [cardset, setCardset] = useState({
    name: "",
    cards: [],
  } as CardSetDetail);

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

  const CardSelect = () => {
    const handleCardSelect = (e: ChangeEvent<{ value: unknown }>) => {
      setCardIndex(Number(e.target.value));
    };

    return (
      <FormControl>
        <InputLabel id="card-select-label">カード</InputLabel>
        <Select
          labelId="card-select-label"
          value={cardIndex}
          onChange={handleCardSelect}
        >
          {cardset.cards.map((elm, index) => (
            <MenuItem key={index} value={index}>
              {elm.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const AddCardButton = () => {
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

    return (
      <Button
        variant="contained"
        onClick={handleAddCardButtonClick}
        color="primary"
        startIcon={<AddIcon />}
      />
    );
  };

  const DeleteCardButton = () => {
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

    return (
      <Button
        variant="contained"
        onClick={handleDeleteCardButtonClick}
        color="secondary"
        startIcon={<DeleteIcon />}
      />
    );
  };
  const DownloadButton = () => {
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

    const downloadCardSet = (cardset: CardSetDetail) =>
      saveJson(filename, cardset);

    return (
      <Button
        variant="contained"
        onClick={() => downloadCardSet(cardset)}
        startIcon={<GetAppIcon />}
      >
        保存
      </Button>
    );
  };

  const LoadCardsetButton = () => {
    const handleChangeLoadCardset = (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {
      if (!e.target.files || e.target.files.length === 0) {
        return;
      }

      const cardsetFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const json = e.target?.result;
        if (typeof json !== "string") {
          return;
        }

        console.log(json);

        const cardset = JSON.parse(json);
        setCardset(cardset);
      };
      reader.readAsText(cardsetFile);
    };

    return (
      <label htmlFor="load-cardset">
        <input
          style={{ display: "none" }}
          id="load-cardset"
          onChange={handleChangeLoadCardset}
          type="file"
        />

        <Button
          variant="contained"
          component="span"
          startIcon={<OpenInBrowserIcon />}
        >
          開く
        </Button>
      </label>
    );
  };

  const classes = useStyles();

  useEffect(() => {
    if (!loading) {
      return;
    }

    LoadMetadata().then(() => {
      setCardset({
        name: "",
        cards: [newCard(cardIndex)],
      });
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className={classes.root}>
      <Head>
        <title>Cauldron DCG - カード作成ツール</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <h1 className={styles.title}>Cauldron DCG - カード作成ツール</h1>
        <span>
          <DownloadButton></DownloadButton>
          <LoadCardsetButton></LoadCardsetButton>
        </span>
        <TextField
          label="カードセット名"
          value={cardset.name}
          onChange={(e) => setCardset({ ...cardset, name: e.target.value })}
        />
        <span style={{ display: "flex", alignItems: "center" }}>
          <CardSelect></CardSelect>
          <AddCardButton></AddCardButton>
          <DeleteCardButton></DeleteCardButton>
        </span>
        <div style={{ marginLeft: "2rem" }}>
          <Card
            detail={cardset.cards[cardIndex]}
            onChanged={handleCardChange}
          ></Card>
        </div>
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
