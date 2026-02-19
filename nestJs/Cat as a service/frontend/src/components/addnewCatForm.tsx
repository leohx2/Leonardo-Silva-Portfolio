import { useState } from "react";

interface Props {
  updateTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  update: boolean;
}

export const AddNewCatForm = ({ updateTrigger, update }: Props) => {
  const [author, setAuthor] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const [source, setSource] = useState("");
  const [sucess, setSucess] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/addCat/", {
          method: "Post",
          body: JSON.stringify({
            author,
            href: imageAddress,
            taken_from: source,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error(response.statusText);

        setAuthor("");
        setImageAddress("");
        setSource("");
        setErr("");
        setSucess(true);
        updateTrigger(!update);
        setTimeout(() => setSucess(false), 5000);
      } catch (err: unknown) {
        if (err instanceof Error) setErr(err.message);
        else setErr("Error while adding a new Cat, try again later");
      }
    };
    getData();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        id="Author"
        placeholder="Author"
        value={author}
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="url"
        id="image address"
        placeholder="image address"
        required
        value={imageAddress}
        onChange={(e) => setImageAddress(e.target.value)}
      />
      <input
        type="url"
        id="source"
        placeholder="Insert the source link"
        required
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <input className="submitBtn" type="submit" value={"+"} />
      {sucess && <p>Sucess!</p>}
      {err && <p>{err}</p>}
    </form>
  );
};
