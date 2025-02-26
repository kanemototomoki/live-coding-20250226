import { Button } from "../components/Button";

export default function Buttons() {
  return (
    <>
      <div className="grid place-items-center h-screen gap-2">
        <Button variant={"primary"}>ボタン primary</Button>
        <Button variant={"secondary"}>ボタン secondary</Button>
        <Button variant={"danger"}>ボタン danger</Button>
      </div>
    </>
  );
}
