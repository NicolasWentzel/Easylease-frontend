import React, { useEffect } from "react";
import style from "../styles/ClientCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addId } from "../reducers/client";

function ClientCard(props) {
  const router = useRouter();

  const dispatch = useDispatch();

  const affichePageClient = () => {
    router.push({
      pathname : "/clientProfil",
      query: props
    });
  };

  return (
    // contenue de ma card contrat
    <div className={style.card} onClick={() => affichePageClient()}>
      {/* icon de contrat /}
      <FontAwesomeIcon icon={faFileSignature} className={style.userIcon} />
      {/ info du contrat */}
      <div className={style.infoContrat}>
        <span style={{fontSize:23, color:'white',fontSize:'1.4em', fontWeight:'bold'}}>{props.name.substring(0,15)}</span>
        <span style={{fontSize:23, color:'white',fontSize:'1.2em'}}>{props.address}</span>
        <span style={{fontSize:23, color:'white',fontSize:'1.0em'}}>...</span>
      </div>
    </div>
  );
}

export default ClientCard;
