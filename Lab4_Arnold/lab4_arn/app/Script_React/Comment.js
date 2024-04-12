import Image from "next/image";
function Commentaire({commentaire}) {

  return (
    <div className="row">
      <div className="col-3 col-lg-1">
        <Image src="/images/user.jpg" alt="User" height={65} width={65} />
      </div>
      <div className="col-9 col-lg-11">
        <p className="col-12 col-lg-12">{commentaire}</p>
      </div>
    </div>
  );
}
export default Commentaire;