import React, { useState, useEffect, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from '../../components/ProductCard';
import filterData from "../../data/filter_one.json";
import defaultImage from '../../assets/images/NoImageFound.jpg.png'; // Fallback image
import image1 from '../../assets/images/downloaded_images/AC-CA-IT-FLSRS4851000.jpg';
import image2 from '../../assets/images/downloaded_images/AC-MO-DI-SKTPN1.jpg';
import image3 from '../../assets/images/downloaded_images/AC-PU-CA-PB22SIM41G.jpg';
import image4 from '../../assets/images/downloaded_images/AC-PU-CA-PB22SM41K.jpg';
import image5 from '../../assets/images/downloaded_images/AC-PU-EL-RFSAI61B.jpg';
import image6 from '../../assets/images/downloaded_images/AC-RE-BA-RFDA73MRGB.jpg';
import image7 from '../../assets/images/downloaded_images/AC-RE-BA-RFSA62B.jpg';
import image8 from '../../assets/images/downloaded_images/AC-RE-SE-SCT2.jpg';
import image9 from '../../assets/images/downloaded_images/AC-RE-SI-PL10F.jpg';
import image10 from '../../assets/images/downloaded_images/AC-RE-TA-S510G.jpg';
import image11 from '../../assets/images/downloaded_images/AC-SO-CA-ZMI2NA.jpg';
import image12 from '../../assets/images/downloaded_images/AC-SO-CA-ZMI4NA.jpg';
import image13 from '../../assets/images/downloaded_images/AC-SO-CA-ZPD11A.jpg';
import image14 from '../../assets/images/downloaded_images/AC-SO-CA-ZPD12A.jpg';
import image15 from '../../assets/images/downloaded_images/AC-SO-CA-ZPD8A.jpg';
import image16 from '../../assets/images/downloaded_images/AC-SO-CA-ZPYS2S.jpg';
import image17 from '../../assets/images/downloaded_images/CO-PL-AR-AF10MRD.jpg';
import image18 from '../../assets/images/downloaded_images/CO-PO-TA-SPL1R100200VAC.jpg';
import image19 from '../../assets/images/downloaded_images/CO-PR-CA-GAP1605.jpg';
import image20 from '../../assets/images/downloaded_images/CO-PR-CA-SCTL55.jpg';
import image21 from '../../assets/images/downloaded_images/CO-PR-CA-UCP1.jpg';
import image22 from '../../assets/images/downloaded_images/CO-SM-CA-SPD24RM20.jpg';
import image23 from '../../assets/images/downloaded_images/CO-TE-PA-P908X702020000AA.jpg';
import image24 from '../../assets/images/downloaded_images/CO-TE-PA-P909X301010000AA.jpg';
import image25 from '../../assets/images/downloaded_images/CO-TI-CA-DAA51CM24.jpg';
import image26 from '../../assets/images/downloaded_images/CU-1--CA-CTA5X100A5A.jpg';
import image27 from '../../assets/images/downloaded_images/CU-CU-CA-A8220100.jpg';
import image28 from '../../assets/images/downloaded_images/CU-SP-CA-MI100.jpg';
import image29 from '../../assets/images/downloaded_images/OT-DU-DU-G88102201.jpg';
import image30 from '../../assets/images/downloaded_images/OT-DU-DU-GS38910125230.jpg';
import image31 from '../../assets/images/downloaded_images/OT-DU-DU-GS73800080.jpg';
import image32 from '../../assets/images/downloaded_images/OT-DU-DU-GS751021921.jpg';
import image33 from '../../assets/images/downloaded_images/RE-CO-CA-CGMS9D24S10.jpg';
import image34 from '../../assets/images/downloaded_images/RE-CO-CA-GDP322S120V.jpg';
import image35 from '../../assets/images/downloaded_images/RE-HE-CA-RHS00.jpg';
import image36 from '../../assets/images/downloaded_images/RE-HE-CA-RHS100.jpg';
import image37 from '../../assets/images/downloaded_images/RE-HE-CA-RHS301.jpg';
import image38 from '../../assets/images/downloaded_images/RE-HE-CA-RHS45B.jpg';
import image39 from '../../assets/images/downloaded_images/RE-HE-CA-RHS703.jpg';
import image40 from '../../assets/images/downloaded_images/RE-HE-CA-RHS90A.jpg';
import image41 from '../../assets/images/downloaded_images/RE-IN-CA-RCP1100315.jpg';
import image42 from '../../assets/images/downloaded_images/RE-IN-CA-RCP1100324.jpg';
import image43 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA210115120VAC.jpg';
import image44 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA210230VAC.jpg';
import image45 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA21024VDC.jpg';
import image46 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA45115120VAC.jpg';
import image47 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA45115VAC.jpg';
import image48 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA45230VAC.jpg';
import image49 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA4524VAC.jpg';
import image50 from '../../assets/images/downloaded_images/RE-IN-CA-RMIA4524VDC.jpg';
import image51 from '../../assets/images/downloaded_images/RE-IN-CA-RPYS002024DLT.jpg';
import image52 from '../../assets/images/downloaded_images/RE-IN-FI-465290240074.jpg';
import image53 from '../../assets/images/downloaded_images/RE-IN-FI-563490240074.jpg';
import image54 from '../../assets/images/downloaded_images/RE-ME-EL-MR42UNI.jpg';
import image55 from '../../assets/images/downloaded_images/RE-MO-CA-DFC01DB23.jpg';
import image56 from '../../assets/images/downloaded_images/RE-MO-CA-DIA01CD485A.jpg';
import image57 from '../../assets/images/downloaded_images/RE-MO-CA-DIA53S72420A.jpg';
import image58 from '../../assets/images/downloaded_images/RE-MO-CA-DIA53S72420AB004.jpg';
import image59 from '../../assets/images/downloaded_images/RE-MO-CA-DIA53S72450A.jpg';
import image60 from '../../assets/images/downloaded_images/RE-MO-CA-DIB01CB2310A.jpg';
import image61 from '../../assets/images/downloaded_images/RE-MO-CA-DIB01CB235A.jpg';
import image62 from '../../assets/images/downloaded_images/RE-MO-CA-DIB02CD48150MV.jpg';
import image63 from '../../assets/images/downloaded_images/RE-MO-CA-DPA55CM44.jpg';
import image64 from '../../assets/images/downloaded_images/RE-MO-CA-DPB01CM23.jpg';
import image65 from '../../assets/images/downloaded_images/RE-MO-CA-DPB01CM48.jpg';
import image66 from '../../assets/images/downloaded_images/RE-MO-CA-DPB51CM44.jpg';
import image67 from '../../assets/images/downloaded_images/RE-MO-CA-DPC01DM48.jpg';
import image68 from '../../assets/images/downloaded_images/RE-MO-CA-DPC01DM49400HZ.jpg';
import image69 from '../../assets/images/downloaded_images/RE-MO-CA-DUA52C724.jpg';
import image70 from '../../assets/images/downloaded_images/RE-MO-CA-DUB01CB23500V.jpg';
import image71 from '../../assets/images/downloaded_images/RE-MO-CA-DUB01CD48500V.jpg';
import image72 from '../../assets/images/downloaded_images/RE-MO-CA-DUB02CT23.jpg';
import image73 from '../../assets/images/downloaded_images/RE-MO-CA-SM1552302K.jpg';
import image74 from '../../assets/images/downloaded_images/RE-MO-EL-HRN43N230V.jpg';
import image75 from '../../assets/images/downloaded_images/RE-SO-CA-RFPMV10.jpg';
import image76 from '../../assets/images/downloaded_images/RE-SO-CA-RGTS24120GV00.jpg';
import image77 from '../../assets/images/downloaded_images/RE-SO-CA-RSBT4032EVC1HP.jpg';
import image78 from '../../assets/images/downloaded_images/RE-SO-CA-RSCAAM60.jpg';
import image79 from '../../assets/images/downloaded_images/RE-SO-CA-RSGD4012E0VD210.jpg';
import image80 from '../../assets/images/downloaded_images/RE-SO-CA-RSO4850.jpg';
import image81 from '../../assets/images/downloaded_images/RE-SS-CA-RA23110H06POS.jpg';
import image82 from '../../assets/images/downloaded_images/RE-SS-CA-RA2425D06.jpg';
import image83 from '../../assets/images/downloaded_images/RE-SS-CA-RA2A23D25.jpg';
import image84 from '../../assets/images/downloaded_images/RE-SS-CA-RA4025D08L.jpg';
import image85 from '../../assets/images/downloaded_images/RE-SS-CA-RA4025L10NCSS00.jpg';
import image86 from '../../assets/images/downloaded_images/RE-SS-CA-RA4825H12PCSS18.jpg';
import image87 from '../../assets/images/downloaded_images/RE-SS-CA-RAM160D100G.jpg';
import image88 from '../../assets/images/downloaded_images/RE-SS-CA-RAM1A60D100.jpg';
import image89 from '../../assets/images/downloaded_images/RE-SS-CA-RAM1A60D100G.jpg';
import image90 from '../../assets/images/downloaded_images/RE-SS-CA-RE2410AA06.jpg';
import image91 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A23A20KKE.jpg';
import image92 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A23D25KKE.jpg';
import image93 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60A42KGE.jpg';
import image94 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60A42KGU.jpg';
import image95 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60A60KGE.jpg';
import image96 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60A60KGU.jpg';
import image97 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60A62GGEP.jpg';
import image98 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D15KKE.jpg';
import image99 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D20KGU.jpg';
import image100 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D20KKE.jpg';
import image101 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D25KGU.jpg';
import image102 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D25KKE.jpg';
import image103 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D25KKEC.jpg';
import image104 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D30GKEP.jpg';
import image105 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D30KKE.jpg';
import image106 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D40KGE.jpg';
import image107 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D40KGU.jpg';
import image108 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D42KGE.jpg';
import image109 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D42KGU.jpg';
import image110 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D60KGE.jpg';
import image111 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D62KGE.jpg';
import image112 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1A60D92GGEP.jpg';
import image113 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1P48AA42ET.jpg';
import image114 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1P48V12ED.jpg';
import image115 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1S60D41GGEP.jpg';
import image116 from '../../assets/images/downloaded_images/RE-SS-CA-RGC1S60D41GGUP.jpg';
import image117 from '../../assets/images/downloaded_images/RE-SS-CA-RGC2A60D25KKE.jpg';
import image118 from '../../assets/images/downloaded_images/RE-SS-CA-RGC2A60D75GGEDF.jpg';
import image119 from '../../assets/images/downloaded_images/RE-SS-CA-RGC2A60D75GGEDFP85.jpg';
import image120 from '../../assets/images/downloaded_images/RE-SS-CA-RGC2P60V25C1DM.jpg';
import image121 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60A40GGEAF.jpg';
import image122 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60A65GGEAFM.jpg';
import image123 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60D20GKEDM.jpg';
import image124 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60D20KKE.jpg';
import image125 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60D40GGEDF.jpg';
import image126 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3A60D65GGEDF.jpg';
import image127 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3P60I20EDP.jpg';
import image128 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3P60I30EDP.jpg';
import image129 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3P60I65EAFP.jpg';
import image130 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3P60I65EDFP.jpg';
import image131 from '../../assets/images/downloaded_images/RE-SS-CA-RGC3P60V30C1DM.jpg';
import image132 from '../../assets/images/downloaded_images/RE-SS-CA-RGCM3A60D15GKE.jpg';
import image133 from '../../assets/images/downloaded_images/RE-SS-CA-RGH1A60D31KKE.jpg';
import image134 from '../../assets/images/downloaded_images/RE-SS-CA-RGS1A23D25KKE.jpg';
import image135 from '../../assets/images/downloaded_images/RE-SS-CA-RGS1A60D50KKE.jpg';
import image136 from '../../assets/images/downloaded_images/RE-SS-CA-RGS1A60D50MKES275.jpg';
import image137 from '../../assets/images/downloaded_images/RE-SS-CA-RGS1A60D90KKE.jpg';
import image138 from '../../assets/images/downloaded_images/RE-SS-CA-RK2A60D50P.jpg';
import image139 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A23A50.jpg';
import image140 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A23A75.jpg';
import image141 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A23D25.jpg';
import image142 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A23D50.jpg';
import image143 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A40A25.jpg';
import image144 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A40D50.jpg';
import image145 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48A100.jpg';
import image146 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48A25.jpg';
import image147 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48A50.jpg';
import image148 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48D100.jpg';
import image149 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48D50.jpg';
import image150 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48D50S18.jpg';
import image151 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48D75.jpg';
import image152 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A48D75LP40.jpg';
import image153 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A60D50.jpg';
import image154 from '../../assets/images/downloaded_images/RE-SS-CA-RM1A60D75.jpg';
import image155 from '../../assets/images/downloaded_images/RE-SS-CA-RM1C40D50.jpg';
import image156 from '../../assets/images/downloaded_images/RE-SS-CA-RM1D060D100.jpg';
import image157 from '../../assets/images/downloaded_images/RE-SS-CA-RM1E23AA25.jpg';
import image158 from '../../assets/images/downloaded_images/RE-SS-CA-RM1E40AA25.jpg';
import image159 from '../../assets/images/downloaded_images/RE-SS-CA-RM1E48AA25.jpg';
import image160 from '../../assets/images/downloaded_images/RE-SS-CA-RM1E48AA50.jpg';
import image161 from '../../assets/images/downloaded_images/RE-SS-CA-RP1A23D3.jpg';
import image162 from '../../assets/images/downloaded_images/RE-SS-CA-RP1A23D5M1.jpg';
import image163 from '../../assets/images/downloaded_images/RE-SS-CA-RP1A40D5.jpg';
import image164 from '../../assets/images/downloaded_images/RE-SS-CA-RP1A48D3.jpg';
import image165 from '../../assets/images/downloaded_images/RE-SS-CA-RP1D060D4.jpg';
import image166 from '../../assets/images/downloaded_images/RE-SS-CA-RPYS002024DLT.jpg';
import image167 from '../../assets/images/downloaded_images/RE-SS-CA-RR2A40D400.jpg';
import image168 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A23A225.jpg';
import image169 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A23A240.jpg';
import image170 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A23D40.jpg';
import image171 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A40A240.jpg';
import image172 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A40D25.jpg';
import image173 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A40D25EB.jpg';
import image174 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A40D40.jpg';
import image175 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A40D40E.jpg';
import image176 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A48D10.jpg';
import image177 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A48D100E.jpg';
import image178 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A48D40.jpg';
import image179 from '../../assets/images/downloaded_images/RE-SS-CA-RS1A48D80E.jpg';
import image180 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A40A40.jpg';
import image181 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A40A75.jpg';
import image182 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A40D25.jpg';
import image183 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A40D40.jpg';
import image184 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A40D55.jpg';
import image185 from '../../assets/images/downloaded_images/RE-SS-CA-RZ3A60D25.jpg';
import image186 from '../../assets/images/downloaded_images/RE-SS-CR-CWA4890.jpg';
import image187 from '../../assets/images/downloaded_images/RE-SS-CR-ELS4850.jpg';
import image188 from '../../assets/images/downloaded_images/RE-SS-FI-348170249024.jpg';
import image189 from '../../assets/images/downloaded_images/RE-TH-SE-3UA50001K.jpg';
import image190 from '../../assets/images/downloaded_images/RE-TI-CA-PBB01DM24.jpg';
import image191 from '../../assets/images/downloaded_images/RE-TI-CA-PMB01DM24.jpg';
import image192 from '../../assets/images/downloaded_images/RE-TI-CA-PMC01C024.jpg';
import image193 from '../../assets/images/downloaded_images/RE-TI-EL-PRM92HUNI.jpg';
import image194 from '../../assets/images/downloaded_images/SA-CU-TA-XGM2T20A.jpg';
import image195 from '../../assets/images/downloaded_images/SA-CU-TA-XGM2TL20.jpg';
import image196 from '../../assets/images/downloaded_images/SA-LE-CA-SMS01.jpg';
import image197 from '../../assets/images/downloaded_images/SA-LE-CA-SMS02LD.jpg';
import image198 from '../../assets/images/downloaded_images/SA-LE-CA-SMSA2P02.jpg';
import image199 from '../../assets/images/downloaded_images/SA-MA-CA-SMS31.jpg';
import image200 from '../../assets/images/downloaded_images/SA-MA-TE-TRS542.jpg';
import image201 from '../../assets/images/downloaded_images/SA-RE-CA-NA13CT.jpg';
import image202 from '../../assets/images/downloaded_images/SA-RE-CA-NES13DB24SA.jpg';
import image203 from '../../assets/images/downloaded_images/SA-RE-CA-SME41.jpg';
import image204 from '../../assets/images/downloaded_images/SA-RE-MA-SGEFS1044L.jpg';
import image205 from '../../assets/images/downloaded_images/SA-SA-MA-SLW1K2GP50CR1180.jpg';
import image206 from '../../assets/images/downloaded_images/SA-SA-MA-SLW1K2GP50CR1270.jpg';
import image207 from '../../assets/images/downloaded_images/SE-AR-BE-IXIODT1.jpg';
import image208 from '../../assets/images/downloaded_images/SE-AR-BE-LZRFLATSCANRS305.jpg';
import image209 from '../../assets/images/downloaded_images/SE-AR-PA-NA111PN.jpg';
import image210 from '../../assets/images/downloaded_images/SE-AR-TA-SS10T16.jpg';
import image211 from '../../assets/images/downloaded_images/SE-AR-TA-SS10T16PN.jpg';
import image212 from '../../assets/images/downloaded_images/SE-AR-TA-SSCTR810.jpg';
import image213 from '../../assets/images/downloaded_images/SE-AR-TA-XIT3.jpg';
import image214 from '../../assets/images/downloaded_images/SE-CA-CA-CA12CLC08BPRT.jpg';
import image215 from '../../assets/images/downloaded_images/SE-CA-CA-CA18CAF08NAM1.jpg';
import image216 from '../../assets/images/downloaded_images/SE-CA-CA-CA18CAN12PA.jpg';
import image217 from '../../assets/images/downloaded_images/SE-CA-CA-CA18CAN12PAM1.jpg';
import image218 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAF16NAM1.jpg';
import image219 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAF16PA.jpg';
import image220 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAF16PAM1.jpg';
import image221 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAN25NA.jpg';
import image222 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAN25NAM1.jpg';
import image223 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CAN25PAM1.jpg';
import image224 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CLL30BP.jpg';
import image225 from '../../assets/images/downloaded_images/SE-CA-CA-CA30CLL30BPM1.jpg';
import image226 from '../../assets/images/downloaded_images/SE-CA-CA-CB18CLN12TCFT.jpg';
import image227 from '../../assets/images/downloaded_images/SE-CA-CA-EC3016NPAPL.jpg';
import image228 from '../../assets/images/downloaded_images/SE-CA-CA-EC3016NPASL1.jpg';
import image229 from '../../assets/images/downloaded_images/SE-CA-CA-EC3016PPAPL.jpg';
import image230 from '../../assets/images/downloaded_images/SE-CA-CA-EC3016PPAPL1.jpg';
import image231 from '../../assets/images/downloaded_images/SE-CA-CA-EC3016PPASL1.jpg';
import image232 from '../../assets/images/downloaded_images/SE-CA-CA-EC3025NPAPL.jpg';
import image233 from '../../assets/images/downloaded_images/SE-CA-CA-EC3025PPAPL.jpg';
import image234 from '../../assets/images/downloaded_images/SE-CA-CA-EC5525NPAP.jpg';
import image235 from '../../assets/images/downloaded_images/SE-CA-CA-EC5525PPAP.jpg';
import image236 from '../../assets/images/downloaded_images/SE-CA-CA-EC5525PPAP1.jpg';
import image237 from '../../assets/images/downloaded_images/SE-CA-CA-ECH3010PPAT1.jpg';
import image238 from '../../assets/images/downloaded_images/SE-CA-CA-NDS12BB24SA.jpg';
import image239 from '../../assets/images/downloaded_images/SE-CA-CA-VC12RN230.jpg';
import image240 from '../../assets/images/downloaded_images/SE-CA-FO-CP3050C.jpg';
import image241 from '../../assets/images/downloaded_images/SE-CA-IF-KG5043.jpg';
import image242 from '../../assets/images/downloaded_images/SE-CA-SE-K0130POC5.jpg';
import image243 from '../../assets/images/downloaded_images/SE-CA-SE-K0130PSCC5.jpg';
import image244 from '../../assets/images/downloaded_images/SE-CA-SE-K1320PCC5.jpg';
import image245 from '../../assets/images/downloaded_images/SE-CA-SE-K1320POC5.jpg';
import image246 from '../../assets/images/downloaded_images/SE-CA-SE-K13G20NO.jpg';
import image247 from '../../assets/images/downloaded_images/SE-CA-SE-K13G20PO.jpg';
import image248 from '../../assets/images/downloaded_images/SE-CA-SE-K13G20POSP122.jpg';
import image249 from '../../assets/images/downloaded_images/SE-CA-SE-K14E30PSCC5.jpg';
import image250 from '../../assets/images/downloaded_images/SE-CA-SE-K14EG32PSC.jpg';
import image251 from '../../assets/images/downloaded_images/SE-CA-XE-CHT12N8BPC60A2S.jpg';
import image252 from '../../assets/images/downloaded_images/SE-CA-XE-CS12S4NO60A2P.jpg';
import image253 from '../../assets/images/downloaded_images/SE-CO-AK-ESE10N.jpg';
import image254 from '../../assets/images/downloaded_images/SE-CO-BA-R58ECRGB2.jpg';
import image255 from '../../assets/images/downloaded_images/SE-CO-CA-LD30CPBR10BPA2IO.jpg';
import image256 from '../../assets/images/downloaded_images/SE-CO-CA-LD32CND15PPT.jpg';
import image257 from '../../assets/images/downloaded_images/SE-CO-CA-LD32CNP10PPT.jpg';
import image258 from '../../assets/images/downloaded_images/SE-CO-DA-TL50W815.jpg';
import image259 from '../../assets/images/downloaded_images/SE-CO-DA-TLU011.jpg';
import image260 from '../../assets/images/downloaded_images/SE-CO-EM-UVX300.jpg';
import image261 from '../../assets/images/downloaded_images/SE-CO-EM-UVX30TP.jpg';
import image262 from '../../assets/images/downloaded_images/SE-CO-IN-MR90V.jpg';
import image263 from '../../assets/images/downloaded_images/SE-FI-CA-FA1N.jpg';
import image264 from '../../assets/images/downloaded_images/SE-FI-CA-FGT01MCM200.jpg';
import image265 from '../../assets/images/downloaded_images/SE-FI-CA-FPD01SBS200.jpg';
import image266 from '../../assets/images/downloaded_images/SE-FI-CA-FPDC02SCC100.jpg';
import image267 from '../../assets/images/downloaded_images/SE-FI-CA-PD60CNV20BP.jpg';
import image268 from '../../assets/images/downloaded_images/SE-FI-CA-PD60CNX20BPT.jpg';
import image269 from '../../assets/images/downloaded_images/SE-FI-KE-FSM1P.jpg';
import image270 from '../../assets/images/downloaded_images/SE-FI-KE-FU66.jpg';
import image271 from '../../assets/images/downloaded_images/SE-FI-PA-FD61.jpg';
import image272 from '../../assets/images/downloaded_images/SE-FI-PA-FX102PCC2.jpg';
import image273 from '../../assets/images/downloaded_images/SE-FI-PA-FX301.jpg';
import image274 from '../../assets/images/downloaded_images/SE-FI-PA-FX301P.jpg';
import image275 from '../../assets/images/downloaded_images/SE-FI-PA-FX501.jpg';
import image276 from '../../assets/images/downloaded_images/SE-FI-PA-FXMR2.jpg';
import image277 from '../../assets/images/downloaded_images/SE-FI-TA-F2R.jpg';
import image278 from '../../assets/images/downloaded_images/SE-FI-TA-F5N.jpg';
import image279 from '../../assets/images/downloaded_images/SE-FI-TA-F5RN.jpg';
import image280 from '../../assets/images/downloaded_images/SE-FI-TA-F70AR.jpg';
import image281 from '../../assets/images/downloaded_images/SE-FI-TA-F70RPNJE.jpg';
import image282 from '../../assets/images/downloaded_images/SE-FI-TA-F71CR.jpg';
import image283 from '../../assets/images/downloaded_images/SE-FI-TA-F71CRPN.jpg';
import image284 from '../../assets/images/downloaded_images/SE-FI-TA-F71RAN.jpg';
import image285 from '../../assets/images/downloaded_images/SE-FI-TA-F71RPN.jpg';
import image286 from '../../assets/images/downloaded_images/SE-FI-TA-F7K1.jpg';
import image287 from '../../assets/images/downloaded_images/SE-FI-TA-F7K2.jpg';
import image288 from '../../assets/images/downloaded_images/SE-FI-TA-F7K3.jpg';
import image289 from '../../assets/images/downloaded_images/SE-FI-TA-F7K4.jpg';
import image290 from '../../assets/images/downloaded_images/SE-FI-TA-F80RPN.jpg';
import image291 from '../../assets/images/downloaded_images/SE-FI-TA-F85RN.jpg';
import image292 from '../../assets/images/downloaded_images/SE-FI-TA-FA181BC.jpg';
import image293 from '../../assets/images/downloaded_images/SE-FI-TA-FA191BC.jpg';
import image294 from '../../assets/images/downloaded_images/SE-FI-TA-FA252M.jpg';
import image295 from '../../assets/images/downloaded_images/SE-FI-TA-FA500.jpg';
import image296 from '../../assets/images/downloaded_images/SE-FI-TA-FA7CN.jpg';
import image297 from '../../assets/images/downloaded_images/SE-FI-TA-FBC4R2L.jpg';
import image298 from '../../assets/images/downloaded_images/SE-FI-TA-FDA300P.jpg';
import image299 from '../../assets/images/downloaded_images/SE-FI-TA-FR105BC.jpg';
import image300 from '../../assets/images/downloaded_images/SE-FI-TA-FR108BC.jpg';
import image301 from '../../assets/images/downloaded_images/SE-FI-TA-FR505.jpg';
import image302 from '../../assets/images/downloaded_images/SE-FI-TA-FR5BC.jpg';
import image303 from '../../assets/images/downloaded_images/SE-FI-TA-FR7BC.jpg';
import image304 from '../../assets/images/downloaded_images/SE-FI-TA-FR8BC.jpg';
import image305 from '../../assets/images/downloaded_images/SE-FI-TA-FRH7BC.jpg';
import image306 from '../../assets/images/downloaded_images/SE-FI-TA-FRL702BC.jpg';
import image307 from '../../assets/images/downloaded_images/SE-FI-TA-FRL732BC.jpg';
import image308 from '../../assets/images/downloaded_images/SE-FI-TA-FT101AD2.jpg';
import image309 from '../../assets/images/downloaded_images/SE-FI-TA-FT7BC.jpg';
import image310 from '../../assets/images/downloaded_images/SE-FI-TA-FT81BC.jpg';
import image311 from '../../assets/images/downloaded_images/SE-FI-TA-FTL101.jpg';
import image312 from '../../assets/images/downloaded_images/SE-FI-TA-FU712BC.jpg';
import image313 from '../../assets/images/downloaded_images/SE-FI-TA-FU901BC.jpg';
import image314 from '../../assets/images/downloaded_images/SE-FI-TA-FX220J.jpg';
import image315 from '../../assets/images/downloaded_images/SE-FI-TA-FX84BC.jpg';
import image316 from '../../assets/images/downloaded_images/SE-FO-BA-SL30.jpg';
import image317 from '../../assets/images/downloaded_images/SE-FO-CA-DU6E.jpg';
import image318 from '../../assets/images/downloaded_images/SE-FO-DA-SR21IR.jpg';
import image319 from '../../assets/images/downloaded_images/SE-FO-SE-FOM80PNSCV8.jpg';
import image320 from '../../assets/images/downloaded_images/SE-FO-SE-FOV02PNSCV8.jpg';
import image321 from '../../assets/images/downloaded_images/SE-FO-SE-FOV03PNSCV8.jpg';
import image322 from '../../assets/images/downloaded_images/SE-FO-SE-FOV20PNOV6.jpg';
import image323 from '../../assets/images/downloaded_images/SE-FO-SE-FOV30PNSCC5.jpg';
import image324 from '../../assets/images/downloaded_images/SE-FO-SE-FOV50PNSCC5.jpg';
import image325 from '../../assets/images/downloaded_images/SE-FO-TE-XUVE04M3KSNM8.jpg';
import image326 from '../../assets/images/downloaded_images/SE-FO-TE-XUVU06M3KSNM8.jpg';
import image327 from '../../assets/images/downloaded_images/SE-HM-AU-FD32005.jpg';
import image328 from '../../assets/images/downloaded_images/SE-HM-HO-C7027A1023.jpg';
import image329 from '../../assets/images/downloaded_images/SE-HM-TA-F38A.jpg';
import image330 from '../../assets/images/downloaded_images/SE-HM-TA-FDA320.jpg';
import image331 from '../../assets/images/downloaded_images/SE-HM-TA-FS1000E.jpg';
import image332 from '../../assets/images/downloaded_images/SE-HM-TA-FS2000E.jpg';
import image333 from '../../assets/images/downloaded_images/SE-HM-TA-FS5000E.jpg';
import image334 from '../../assets/images/downloaded_images/SE-HM-TA-HD301A.jpg';
import image335 from '../../assets/images/downloaded_images/SE-HM-TA-HD301N.jpg';
import image336 from '../../assets/images/downloaded_images/SE-HM-TA-HD601N.jpg';
import image337 from '../../assets/images/downloaded_images/SE-HM-TA-KD50.jpg';
import image338 from '../../assets/images/downloaded_images/SE-IN-AU-PSN178DNUF.jpg';
import image339 from '../../assets/images/downloaded_images/SE-IN-CA-EI0601NACS.jpg';
import image340 from '../../assets/images/downloaded_images/SE-IN-CA-EI0801NACS.jpg';
import image341 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202NPCPL.jpg';
import image342 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202NPOPL.jpg';
import image343 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202NPOPL1.jpg';
import image344 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202NPOPS1.jpg';
import image345 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202NPOSL.jpg';
import image346 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202PPCPL.jpg';
import image347 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202PPCSS.jpg';
import image348 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202PPOPL.jpg';
import image349 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202PPOSL1.jpg';
import image350 from '../../assets/images/downloaded_images/SE-IN-CA-EI1202TBOSL.jpg';
import image351 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204NPOSS1.jpg';
import image352 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204PPCSL.jpg';
import image353 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204PPOPL.jpg';
import image354 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204PPOSL.jpg';
import image355 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204PPOSL1.jpg';
import image356 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204PPOSS1.jpg';
import image357 from '../../assets/images/downloaded_images/SE-IN-CA-EI1204TBOSL.jpg';
import image358 from '../../assets/images/downloaded_images/SE-IN-CA-EI1805I0201.jpg';
import image359 from '../../assets/images/downloaded_images/SE-IN-CA-EI1805NPOPL.jpg';
import image360 from '../../assets/images/downloaded_images/SE-IN-CA-EI1805PPCSL1.jpg';
import image361 from '../../assets/images/downloaded_images/SE-IN-CA-EI1805PPOPL.jpg';
import image362 from '../../assets/images/downloaded_images/SE-IN-CA-EI1805TBCSL.jpg';
import image363 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808PPCSL1.jpg';
import image364 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808PPOS1531.jpg';
import image365 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808PPOSL.jpg';
import image366 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808PPOSS.jpg';
import image367 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808PPOSS1.jpg';
import image368 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808TBOPS.jpg';
import image369 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808TBOSL.jpg';
import image370 from '../../assets/images/downloaded_images/SE-IN-CA-EI1808TBOSS.jpg';
import image371 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010NPOSS.jpg';
import image372 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010PPCSS.jpg';
import image373 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010PPOS.jpg';
import image374 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010PPOSL.jpg';
import image375 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010PPOSS.jpg';
import image376 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010PPOSS1556.jpg';
import image377 from '../../assets/images/downloaded_images/SE-IN-CA-EI3010TBOPS6.jpg';
import image378 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015PPOPL.jpg';
import image379 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015PPOSL.jpg';
import image380 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015TBCPL.jpg';
import image381 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015TBCSL.jpg';
import image382 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015TBOPL.jpg';
import image383 from '../../assets/images/downloaded_images/SE-IN-CA-EI3015TBOSL.jpg';
import image384 from '../../assets/images/downloaded_images/SE-IN-CA-EI5515PPAP.jpg';
import image385 from '../../assets/images/downloaded_images/SE-IN-CA-EI5515PPAP1.jpg';
import image386 from '../../assets/images/downloaded_images/SE-IN-CA-EISH200MA024.jpg';
import image387 from '../../assets/images/downloaded_images/SE-IN-CA-EO1804NPAS.jpg';
import image388 from '../../assets/images/downloaded_images/SE-IN-CA-IA05BSF08POP033.jpg';
import image389 from '../../assets/images/downloaded_images/SE-IN-CA-IA05BSF10NOP.jpg';
import image390 from '../../assets/images/downloaded_images/SE-IN-CA-IA05BSF10POM5P.jpg';
import image391 from '../../assets/images/downloaded_images/SE-IN-CA-IA06BSF10PC.jpg';
import image392 from '../../assets/images/downloaded_images/SE-IN-CA-IA06BSF10PCM5.jpg';
import image393 from '../../assets/images/downloaded_images/SE-IN-CA-IA06BSF10POM5.jpg';
import image394 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BLN25PO.jpg';
import image395 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF02DC.jpg';
import image396 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF02DO.jpg';
import image397 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF15NC.jpg';
import image398 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF15NOM5.jpg';
import image399 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF15PCM5.jpg';
import image400 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF15POM5.jpg';
import image401 from '../../assets/images/downloaded_images/SE-IN-CA-IA08BSF20PC.jpg';
import image402 from '../../assets/images/downloaded_images/SE-IN-CA-IA12ASF04DOM1.jpg';
import image403 from '../../assets/images/downloaded_images/SE-IN-CA-IA12ASN08DCM1.jpg';
import image404 from '../../assets/images/downloaded_images/SE-IN-CA-IA12DSF02NC.jpg';
import image405 from '../../assets/images/downloaded_images/SE-IN-CA-IA12DSF02PO.jpg';
import image406 from '../../assets/images/downloaded_images/SE-IN-CA-IA12DSF04DO.jpg';
import image407 from '../../assets/images/downloaded_images/SE-IN-CA-IA12DSN04NO.jpg';
import image408 from '../../assets/images/downloaded_images/SE-IN-CA-IA12DSN08DO.jpg';
import image409 from '../../assets/images/downloaded_images/SE-IN-CA-IA12ESF02UCM1.jpg';
import image410 from '../../assets/images/downloaded_images/SE-IN-CA-IA12ESN04UC.jpg';
import image411 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ASN08PCM1.jpg';
import image412 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ASN08POM1.jpg';
import image413 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ASN14DCM1.jpg';
import image414 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSF05NO.jpg';
import image415 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSF08DO.jpg';
import image416 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSF08NO.jpg';
import image417 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSN08NO.jpg';
import image418 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSN08PC.jpg';
import image419 from '../../assets/images/downloaded_images/SE-IN-CA-IA18DSN08PO.jpg';
import image420 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ELF05UC.jpg';
import image421 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ELN08UC.jpg';
import image422 from '../../assets/images/downloaded_images/SE-IN-CA-IA18ESF05UCM1.jpg';
import image423 from '../../assets/images/downloaded_images/SE-IN-CA-IA30ASN15POM1.jpg';
import image424 from '../../assets/images/downloaded_images/SE-IN-CA-IA30ASN22POM1.jpg';
import image425 from '../../assets/images/downloaded_images/SE-IN-CA-IA30DSF15DC.jpg';
import image426 from '../../assets/images/downloaded_images/SE-IN-CA-IA30DSF15NO.jpg';
import image427 from '../../assets/images/downloaded_images/SE-IN-CA-IA30DSF15PO.jpg';
import image428 from '../../assets/images/downloaded_images/SE-IN-CA-IA30DSN22NO.jpg';
import image429 from '../../assets/images/downloaded_images/SE-IN-CA-IA30DSN22PO.jpg';
import image430 from '../../assets/images/downloaded_images/SE-IN-CA-IC40CNN30COT1.jpg';
import image431 from '../../assets/images/downloaded_images/SE-IN-CA-IC40CNN30NAT1.jpg';
import image432 from '../../assets/images/downloaded_images/SE-IN-CA-IC40CNN30PAT1.jpg';
import image433 from '../../assets/images/downloaded_images/SE-IN-CA-IC40CNN30TAT1.jpg';
import image434 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12L50F04A2IO.jpg';
import image435 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12L50F04NO.jpg';
import image436 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12L50F04PC.jpg';
import image437 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12L50F04POM1.jpg';
import image438 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12L50N08PO.jpg';
import image439 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12S30F02PO.jpg';
import image440 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12S30F04PA.jpg';
import image441 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12S30F04POM1.jpg';
import image442 from '../../assets/images/downloaded_images/SE-IN-CA-ICB12SF04PO5M.jpg';
import image443 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18L50F05NO.jpg';
import image444 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18L50F05POM1.jpg';
import image445 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18L50F08NA.jpg';
import image446 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18L50F08PO.jpg';
import image447 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18L50N14PO.jpg';
import image448 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30F05PO.jpg';
import image449 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30F08POM1.jpg';
import image450 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30F12NO.jpg';
import image451 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30F12PO.jpg';
import image452 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30N08PO.jpg';
import image453 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30N08POM1.jpg';
import image454 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30N14PO.jpg';
import image455 from '../../assets/images/downloaded_images/SE-IN-CA-ICB18S30N14POM1.jpg';
import image456 from '../../assets/images/downloaded_images/SE-IN-CA-ICB30L50F22PO.jpg';
import image457 from '../../assets/images/downloaded_images/SE-IN-CA-ICB30L50F22POM1.jpg';
import image458 from '../../assets/images/downloaded_images/SE-IN-CA-ICB30L50N15PO.jpg';
import image459 from '../../assets/images/downloaded_images/SE-IN-CA-ICB30L50N40PO.jpg';
import image460 from '../../assets/images/downloaded_images/SE-IN-CA-ICB30S30N15PO.jpg';
import image461 from '../../assets/images/downloaded_images/SE-IN-CA-ICS05S23F08A2NO.jpg';
import image462 from '../../assets/images/downloaded_images/SE-IN-CA-ICS05S23F15A2IO.jpg';
import image463 from '../../assets/images/downloaded_images/SE-IN-CA-ICS05S23F15A2NO.jpg';
import image464 from '../../assets/images/downloaded_images/SE-IN-CA-ICS05S23F15M5PO.jpg';
import image465 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45F01PC.jpg';
import image466 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45F01PCM5.jpg';
import image467 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45F01POM5.jpg';
import image468 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45F02POM5.jpg';
import image469 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45F20A2IO.jpg';
import image470 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45N02PO.jpg';
import image471 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08L45N40M5IO.jpg';
import image472 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F01NO.jpg';
import image473 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F01POM5.jpg';
import image474 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F02PC.jpg';
import image475 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F02PO.jpg';
import image476 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F20A2IO.jpg';
import image477 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30F20A2PO.jpg';
import image478 from '../../assets/images/downloaded_images/SE-IN-CA-ICS08S30N40A2IO.jpg';
import image479 from '../../assets/images/downloaded_images/SE-IN-CA-ID25ANC05NAK.jpg';
import image480 from '../../assets/images/downloaded_images/SE-IN-CA-ID25ANC05PAK.jpg';
import image481 from '../../assets/images/downloaded_images/SE-IN-CA-IRC40SN40M1PA.jpg';
import image482 from '../../assets/images/downloaded_images/SE-IN-CA-LDD2PA2DU24.jpg';
import image483 from '../../assets/images/downloaded_images/SE-IN-CA-LDP1PA2DU24.jpg';
import image484 from '../../assets/images/downloaded_images/SE-IN-CA-LDP2PA2DU24.jpg';
import image485 from '../../assets/images/downloaded_images/SE-IN-CA-MA3.jpg';
import image486 from '../../assets/images/downloaded_images/SE-IN-CA-SME41.jpg';
import image487 from '../../assets/images/downloaded_images/SE-IN-IN-ID183008PA.jpg';
import image488 from '../../assets/images/downloaded_images/SE-IN-IN-IS104.jpg';
import image489 from '../../assets/images/downloaded_images/SE-IN-IN-IS105.jpg';
import image490 from '../../assets/images/downloaded_images/SE-IN-IN-IS13.jpg';
import image491 from '../../assets/images/downloaded_images/SE-IN-IN-IS37D.jpg';
import image492 from '../../assets/images/downloaded_images/SE-IN-IN-IS38D.jpg';
import image493 from '../../assets/images/downloaded_images/SE-IN-IN-IS43D.jpg';
import image494 from '../../assets/images/downloaded_images/SE-IN-IN-IS46D.jpg';
import image495 from '../../assets/images/downloaded_images/SE-IN-IN-ISI44SEX.jpg';
import image496 from '../../assets/images/downloaded_images/SE-IN-IN-ISI59SEX.jpg';
import image497 from '../../assets/images/downloaded_images/SE-IN-IN-LR18XBN08DPOE2.jpg';
import image498 from '../../assets/images/downloaded_images/SE-IN-LE-IS118MM4NO8E0M12.jpg';
import image499 from '../../assets/images/downloaded_images/SE-IN-OM-E2ECCR8D12M.jpg';
import image500 from '../../assets/images/downloaded_images/SE-IN-OM-E2EYX8C12M.jpg';
import image501 from '../../assets/images/downloaded_images/SE-IN-OM-E2SQ15.jpg';
import image502 from '../../assets/images/downloaded_images/SE-IN-OM-TLQ5MC12M.jpg';
import image503 from '../../assets/images/downloaded_images/SE-IN-PA-GX18MU.jpg';
import image504 from '../../assets/images/downloaded_images/SE-IN-PA-GXF12A.jpg';
import image505 from '../../assets/images/downloaded_images/SE-IN-PA-GXF15BPC5.jpg';
import image506 from '../../assets/images/downloaded_images/SE-IN-PA-GXF8AP.jpg';
import image507 from '../../assets/images/downloaded_images/SE-IN-PA-GXF8BP.jpg';
import image508 from '../../assets/images/downloaded_images/SE-IN-PA-GXH12BP.jpg';
import image509 from '../../assets/images/downloaded_images/SE-IN-PA-GXH8A.jpg';
import image510 from '../../assets/images/downloaded_images/SE-IN-PA-GXL15FLUBC5.jpg';
import image511 from '../../assets/images/downloaded_images/SE-IN-PA-GXL15FU.jpg';
import image512 from '../../assets/images/downloaded_images/SE-IN-PA-GXL15FUB.jpg';
import image513 from '../../assets/images/downloaded_images/SE-IN-PA-GXL15FUBC5.jpg';
import image514 from '../../assets/images/downloaded_images/SE-IN-PA-GXL15FUC5.jpg';
import image515 from '../../assets/images/downloaded_images/SE-IN-SE-A01CF24.jpg';
import image516 from '../../assets/images/downloaded_images/SE-IN-SE-B0181NOC5.jpg';
import image517 from '../../assets/images/downloaded_images/SE-IN-SE-B01E124POC5.jpg';
import image518 from '../../assets/images/downloaded_images/SE-IN-SE-B01E82POC5.jpg';
import image519 from '../../assets/images/downloaded_images/SE-IN-SE-B01EG82PO.jpg';
import image520 from '../../assets/images/downloaded_images/SE-IN-SE-B01G6515PC.jpg';
import image521 from '../../assets/images/downloaded_images/SE-IN-SE-B01Q815P0T24.jpg';
import image522 from '../../assets/images/downloaded_images/SE-IN-SE-B01QE8050PO.jpg';
import image523 from '../../assets/images/downloaded_images/SE-IN-SE-B01QE8050PSC.jpg';
import image524 from '../../assets/images/downloaded_images/SE-IN-SE-B0281P0V6.jpg';
import image525 from '../../assets/images/downloaded_images/SE-IN-SE-B02G122PC.jpg';
import image526 from '../../assets/images/downloaded_images/SE-IN-SE-B033020POC5.jpg';
import image527 from '../../assets/images/downloaded_images/SE-IN-SE-B03G188PO.jpg';
import image528 from '../../assets/images/downloaded_images/SE-IN-SE-B03QE8080PO.jpg';
import image529 from '../../assets/images/downloaded_images/SE-IN-SE-B04G653PO.jpg';
import image530 from '../../assets/images/downloaded_images/SE-IN-SE-B08EN3015SC.jpg';
import image531 from '../../assets/images/downloaded_images/SE-IN-SE-B15EG3015PO.jpg';
import image532 from '../../assets/images/downloaded_images/SE-IN-SE-B50E189V010C5.jpg';
import image533 from '../../assets/images/downloaded_images/SE-IN-SE-B50EG124V010.jpg';
import image534 from '../../assets/images/downloaded_images/SE-IN-SE-B50EG189V010.jpg';
import image535 from '../../assets/images/downloaded_images/SE-IN-SE-B50EG3015V010.jpg';
import image536 from '../../assets/images/downloaded_images/SE-IN-SE-B50EN187V03.jpg';
import image537 from '../../assets/images/downloaded_images/SE-IN-SE-B50G122A010.jpg';
import image538 from '../../assets/images/downloaded_images/SE-IN-SE-B50G3010V010.jpg';
import image539 from '../../assets/images/downloaded_images/SE-IN-SE-B60122POC5.jpg';
import image540 from '../../assets/images/downloaded_images/SE-IN-SE-BCR1G3010PO.jpg';
import image541 from '../../assets/images/downloaded_images/SE-IN-SE-C01EG5035A0.jpg';
import image542 from '../../assets/images/downloaded_images/SE-IN-SE-MB526DIS351.jpg';
import image543 from '../../assets/images/downloaded_images/SE-IN-SE-MB526PFA.jpg';
import image544 from '../../assets/images/downloaded_images/SE-IN-SI-IM050B8PSZWBS02.jpg';
import image545 from '../../assets/images/downloaded_images/SE-IN-TA-PD132.jpg';
import image546 from '../../assets/images/downloaded_images/SE-IN-TA-PD232.jpg';
import image547 from '../../assets/images/downloaded_images/SE-IN-TU-NI60K90SRFZ3X2.jpg';
import image548 from '../../assets/images/downloaded_images/SE-IN-XE-IHP12S15NO56N12.jpg';
import image549 from '../../assets/images/downloaded_images/SE-IN-XE-IHT30N15CPO55N2T.jpg';
import image550 from '../../assets/images/downloaded_images/SE-IN-XE-IHT30S10BPO55A2S.jpg';
import image551 from '../../assets/images/downloaded_images/SE-IN-XE-IHT30S10CN055N2T.jpg';
import image552 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12N10PO68A12.jpg';
import image553 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12N12PC50A2P.jpg';
import image554 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12N8PO50A2P.jpg';
import image555 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S4NC50A2P.jpg';
import image556 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S4NCO50A2P.jpg';
import image557 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S4PO50A2P.jpg';
import image558 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S4PO50M12.jpg';
import image559 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S6PO50M12.jpg';
import image560 from '../../assets/images/downloaded_images/SE-IN-XE-IPS12S6PO68M12.jpg';
import image561 from '../../assets/images/downloaded_images/SE-IN-XE-IPS18N20PO53A12.jpg';
import image562 from '../../assets/images/downloaded_images/SE-IN-XE-IPS18N8PO40A2P.jpg';
import image563 from '../../assets/images/downloaded_images/SE-IN-XE-IPS18S12PO48A12.jpg';
import image564 from '../../assets/images/downloaded_images/SE-IN-XE-IPS18S12PO48M12.jpg';
import image565 from '../../assets/images/downloaded_images/SE-IN-XE-IPS18S8PC55A2P.jpg';
import image566 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30N15U055A2P.jpg';
import image567 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30N25A055A2P.jpg';
import image568 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30N25NCO55A2P.jpg';
import image569 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30N40NO55A2P.jpg';
import image570 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30N40PO79A12.jpg';
import image571 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30S10PC48M12.jpg';
import image572 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30S16PO79M12.jpg';
import image573 from '../../assets/images/downloaded_images/SE-IN-XE-IPS30S22NO55A2P.jpg';
import image574 from '../../assets/images/downloaded_images/SE-IN-XE-IPS5S08PO26A2U.jpg';
import image575 from '../../assets/images/downloaded_images/SE-IN-XE-IPS5S15NO26A2U.jpg';
import image576 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8N2NO45A2P.jpg';
import image577 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8N4NO45M8.jpg';
import image578 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8N4PO45M8.jpg';
import image579 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8N6PO45M8.jpg';
import image580 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8S1PC60A8.jpg';
import image581 from '../../assets/images/downloaded_images/SE-IN-XE-IPS8S2PO45A8.jpg';
import image582 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD3S1PO26A2U.jpg';
import image583 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6N4NO45A2P.jpg';
import image584 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6N4PO45A2P.jpg';
import image585 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6N4PO45M8.jpg';
import image586 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6N6PO45M8.jpg';
import image587 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6S3NO30A2P.jpg';
import image588 from '../../assets/images/downloaded_images/SE-IN-XE-IPSD6S3PO45M8.jpg';
import image589 from '../../assets/images/downloaded_images/SE-LE-CA-CLD2EA1C230.jpg';
import image590 from '../../assets/images/downloaded_images/SE-LE-CA-CLE1K.jpg';
import image591 from '../../assets/images/downloaded_images/SE-LE-CA-CLE2K.jpg';
import image592 from '../../assets/images/downloaded_images/SE-LE-CA-CLH5.jpg';
import image593 from '../../assets/images/downloaded_images/SE-LE-CA-CLP2EA1C230.jpg';
import image594 from '../../assets/images/downloaded_images/SE-LE-CA-CLP2EA1CM24.jpg';
import image595 from '../../assets/images/downloaded_images/SE-LE-CA-SL150048.jpg';
import image596 from '../../assets/images/downloaded_images/SE-LE-CA-UA18CAD09NKTI.jpg';
import image597 from '../../assets/images/downloaded_images/SE-LE-CA-UA18CLD05AKM1TR.jpg';
import image598 from '../../assets/images/downloaded_images/SE-LE-CA-UA18CLD06POM1.jpg';
import image599 from '../../assets/images/downloaded_images/SE-LE-CA-UA30CAD35PKM1T1.jpg';
import image600 from '../../assets/images/downloaded_images/SE-LE-CA-UA30CLD15FGM7.jpg';
import image601 from '../../assets/images/downloaded_images/SE-LE-CA-UA30CLD35AKM1T1.jpg';
import image602 from '../../assets/images/downloaded_images/SE-LE-CA-UA30CLD35AKM1TR.jpg';
import image603 from '../../assets/images/downloaded_images/SE-LE-CA-VNI1.jpg';
import image604 from '../../assets/images/downloaded_images/SE-LE-CA-VP01EP.jpg';
import image605 from '../../assets/images/downloaded_images/SE-LE-CA-VP02E.jpg';
import image606 from '../../assets/images/downloaded_images/SE-LE-CA-VP02EP.jpg';
import image607 from '../../assets/images/downloaded_images/SE-LE-CA-VP02EPM1339.jpg';
import image608 from '../../assets/images/downloaded_images/SE-LE-CA-VP03EP.jpg';
import image609 from '../../assets/images/downloaded_images/SE-LE-CA-VP04EP.jpg';
import image610 from '../../assets/images/downloaded_images/SE-LE-CA-VPA1MNA.jpg';
import image611 from '../../assets/images/downloaded_images/SE-LE-CA-VPA1MPA.jpg';
import image612 from '../../assets/images/downloaded_images/SE-LE-CA-VPA1MPA1.jpg';
import image613 from '../../assets/images/downloaded_images/SE-LE-CA-VPA2MPA.jpg';
import image614 from '../../assets/images/downloaded_images/SE-LE-CA-VPA2MPA1.jpg';
import image615 from '../../assets/images/downloaded_images/SE-LE-CA-VPP310.jpg';
import image616 from '../../assets/images/downloaded_images/SE-LE-CA-VTI4.jpg';
import image617 from '../../assets/images/downloaded_images/SE-LE-IN-VMT16M.jpg';
import image618 from '../../assets/images/downloaded_images/SE-LE-MD-UT2FG60ESY.jpg';
import image619 from '../../assets/images/downloaded_images/SE-LE-MI-DBK4EMPFM123BEEM18.jpg';
import image620 from '../../assets/images/downloaded_images/SE-LE-TA-US1AH.jpg';
import image621 from '../../assets/images/downloaded_images/SE-MA-CA-ILMM590.jpg';
import image622 from '../../assets/images/downloaded_images/SE-MA-CA-ILMM5S2.jpg';
import image623 from '../../assets/images/downloaded_images/SE-MA-CA-ILMPU5.jpg';
import image624 from '../../assets/images/downloaded_images/SE-MA-CA-ILSP8.jpg';
import image625 from '../../assets/images/downloaded_images/SE-MA-CA-ILU2.jpg';
import image626 from '../../assets/images/downloaded_images/SE-MO-BL-BT31FC.jpg';
import image627 from '../../assets/images/downloaded_images/SE-MO-BL-BT31MT.jpg';
import image628 from '../../assets/images/downloaded_images/SE-MO-BL-BT31W.jpg';
import image629 from '../../assets/images/downloaded_images/SE-MO-IN-LA31C.jpg';
import image630 from '../../assets/images/downloaded_images/SE-MO-IN-LA31M1.jpg';
import image631 from '../../assets/images/downloaded_images/SE-MO-IN-LA31MT.jpg';
import image632 from '../../assets/images/downloaded_images/SE-MO-IN-LA31W.jpg';
import image633 from '../../assets/images/downloaded_images/SE-MO-PH-LRM107110.jpg';
import image634 from '../../assets/images/downloaded_images/SE-MO-TA-MS100E.jpg';
import image635 from '../../assets/images/downloaded_images/SE-PH-AU-BRQP400DDTAP.jpg';
import image636 from '../../assets/images/downloaded_images/SE-PH-BA-O300YGR11144059.jpg';
import image637 from '../../assets/images/downloaded_images/SE-PH-BA-QAL50IPQ.jpg';
import image638 from '../../assets/images/downloaded_images/SE-PH-BA-QS18VN6D.jpg';
import image639 from '../../assets/images/downloaded_images/SE-PH-BA-QS30LD.jpg';
import image640 from '../../assets/images/downloaded_images/SE-PH-BT-BU06LN.jpg';
import image641 from '../../assets/images/downloaded_images/SE-PH-CA-E01804NPAS.jpg';
import image642 from '../../assets/images/downloaded_images/SE-PH-CA-E01804PPAS.jpg';
import image643 from '../../assets/images/downloaded_images/SE-PH-CA-ED5502PPAP1.jpg';
import image644 from '../../assets/images/downloaded_images/SE-PH-CA-ED5506PPAP1.jpg';
import image645 from '../../assets/images/downloaded_images/SE-PH-CA-EO1804PPAS1.jpg';
import image646 from '../../assets/images/downloaded_images/SE-PH-CA-EP1820PPAS.jpg';
import image647 from '../../assets/images/downloaded_images/SE-PH-CA-EP1820PPAS1.jpg';
import image648 from '../../assets/images/downloaded_images/SE-PH-CA-ER1830NPAS1.jpg';
import image649 from '../../assets/images/downloaded_images/SE-PH-CA-ER1830PPAS1.jpg';
import image650 from '../../assets/images/downloaded_images/SE-PH-CA-LD30CNBI10BPA2IO.jpg';
import image651 from '../../assets/images/downloaded_images/SE-PH-CA-LD30CNBI10BPM5IO.jpg';
import image652 from '../../assets/images/downloaded_images/SE-PH-CA-LD30ETBI10BPM5IO.jpg';
import image653 from '../../assets/images/downloaded_images/SE-PH-CA-MOFR.jpg';
import image654 from '../../assets/images/downloaded_images/SE-PH-CA-MOFT20.jpg';
import image655 from '../../assets/images/downloaded_images/SE-PH-CA-MPF1912RS.jpg';
import image656 from '../../assets/images/downloaded_images/SE-PH-CA-MPF1912RSA.jpg';
import image657 from '../../assets/images/downloaded_images/SE-PH-CA-MPF3912RSA.jpg';
import image658 from '../../assets/images/downloaded_images/SE-PH-CA-MPFR4.jpg';
import image659 from '../../assets/images/downloaded_images/SE-PH-CA-MPFT154.jpg';
import image660 from '../../assets/images/downloaded_images/SE-PH-CA-PA12BNT20.jpg';
import image661 from '../../assets/images/downloaded_images/SE-PH-CA-PA12BNT20PO.jpg';
import image662 from '../../assets/images/downloaded_images/SE-PH-CA-PA15IPPA.jpg';
import image663 from '../../assets/images/downloaded_images/SE-PH-CA-PA18ALD04TOM6SA.jpg';
import image664 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAB20NASA.jpg';
import image665 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD04NAWS5M.jpg';
import image666 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD04PAM1WS.jpg';
import image667 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD04PAWS.jpg';
import image668 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD04PAWS5M.jpg';
import image669 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD10PAM1SA.jpg';
import image670 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAD10PASA.jpg';
import image671 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAP50PASA.jpg';
import image672 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAR65PASA.jpg';
import image673 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAT20M1.jpg';
import image674 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAT20NAM1SA.jpg';
import image675 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CAT20PAM1SA.jpg';
import image676 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLD04TCSA.jpg';
import image677 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLD04TOM6SA.jpg';
import image678 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLD04TOSA.jpg';
import image679 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLP20TC.jpg';
import image680 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLR30TC.jpg';
import image681 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CLR30TO.jpg';
import image682 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CRP40PAM1SA.jpg';
import image683 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CRR50PAM1SA.jpg';
import image684 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CSD01PA.jpg';
import image685 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CSD04NASA.jpg';
import image686 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CSD04PASA5M.jpg';
import image687 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CSP20NA.jpg';
import image688 from '../../assets/images/downloaded_images/SE-PH-CA-PA18CSP20PAM1.jpg';
import image689 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CDN10RP.jpg';
import image690 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CND10BAM1.jpg';
import image691 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CND10RP.jpg';
import image692 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CND20BA.jpg';
import image693 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CND20RP.jpg';
import image694 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNP06BAM1.jpg';
import image695 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNR10BAM1.jpg';
import image696 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNR10RP.jpg';
import image697 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNT20B.jpg';
import image698 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNT20BA.jpg';
import image699 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNT20BAM1.jpg';
import image700 from '../../assets/images/downloaded_images/SE-PH-CA-PC50CNT20BM1.jpg';
import image701 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB15NPM5RT.jpg';
import image702 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB15NPRT.jpg';
import image703 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB15PPRT.jpg';
import image704 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB20NASA.jpg';
import image705 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB20PASA.jpg';
import image706 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNB25NAM5PS.jpg';
import image707 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10NPM5DU.jpg';
import image708 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10NPRT.jpg';
import image709 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PAM1SA.jpg';
import image710 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PAM5SA.jpg';
import image711 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PASA.jpg';
import image712 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PP.jpg';
import image713 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PPDU.jpg';
import image714 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PPM5DU.jpg';
import image715 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CND10PPRT.jpg';
import image716 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNG02NPRT.jpg';
import image717 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNP06PP.jpg';
import image718 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNP06PPM5DU.jpg';
import image719 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CNP60PASA.jpg';
import image720 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CTBR20BPA2IO.jpg';
import image721 from '../../assets/images/downloaded_images/SE-PH-CA-PD30CTDR10BPA2IO.jpg';
import image722 from '../../assets/images/downloaded_images/SE-PH-CA-PD30ETBR35BPA2IO.jpg';
import image723 from '../../assets/images/downloaded_images/SE-PH-CA-PD86CAP12QPTF.jpg';
import image724 from '../../assets/images/downloaded_images/SE-PH-CA-PH18CNP50PAM1SA.jpg';
import image725 from '../../assets/images/downloaded_images/SE-PH-CA-PH18CNT20M1.jpg';
import image726 from '../../assets/images/downloaded_images/SE-PH-CA-PH18CNT20PAM1SA.jpg';
import image727 from '../../assets/images/downloaded_images/SE-PH-CA-PMD8RGT.jpg';
import image728 from '../../assets/images/downloaded_images/SE-PH-CA-PMP12RG.jpg';
import image729 from '../../assets/images/downloaded_images/SE-PH-CA-PMR10RGT.jpg';
import image730 from '../../assets/images/downloaded_images/SE-PH-CA-PMT20G.jpg';
import image731 from '../../assets/images/downloaded_images/SE-PH-CA-PMT20RG.jpg';
import image732 from '../../assets/images/downloaded_images/SE-PH-DA-S10MA5CO1PL.jpg';
import image733 from '../../assets/images/downloaded_images/SE-PH-DA-S55D1530.jpg';
import image734 from '../../assets/images/downloaded_images/SE-PH-DA-S5NPA2E01PP.jpg';
import image735 from '../../assets/images/downloaded_images/SE-PH-EM-LBX100.jpg';
import image736 from '../../assets/images/downloaded_images/SE-PH-FO-SU02XP.jpg';
import image737 from '../../assets/images/downloaded_images/SE-PH-IF-IFMOJ5148.jpg';
import image738 from '../../assets/images/downloaded_images/SE-PH-IN-FQ05D2.jpg';
import image739 from '../../assets/images/downloaded_images/SE-PH-IP-PT65002H.jpg';
import image740 from '../../assets/images/downloaded_images/SE-PH-IP-PT730520.jpg';
import image741 from '../../assets/images/downloaded_images/SE-PH-OM-E3FBRP112M.jpg';
import image742 from '../../assets/images/downloaded_images/SE-PH-OM-E3ZMV81.jpg';
import image743 from '../../assets/images/downloaded_images/SE-PH-OP-BGS2V100CP.jpg';
import image744 from '../../assets/images/downloaded_images/SE-PH-OP-BGS2V30.jpg';
import image745 from '../../assets/images/downloaded_images/SE-PH-OP-BGS2V30CP.jpg';
import image746 from '../../assets/images/downloaded_images/SE-PH-OP-BGSDL10TPE.jpg';
import image747 from '../../assets/images/downloaded_images/SE-PH-OP-BGSHLM25T.jpg';
import image748 from '../../assets/images/downloaded_images/SE-PH-OP-BGSZ30N.jpg';
import image749 from '../../assets/images/downloaded_images/SE-PH-OP-BGSZM30CP4.jpg';
import image750 from '../../assets/images/downloaded_images/SE-PH-OP-BRFCHP.jpg';
import image751 from '../../assets/images/downloaded_images/SE-PH-OP-BRFN.jpg';
import image752 from '../../assets/images/downloaded_images/SE-PH-OP-BRFP.jpg';
import image753 from '../../assets/images/downloaded_images/SE-PH-OP-C2DM11CN.jpg';
import image754 from '../../assets/images/downloaded_images/SE-PH-OP-C2DM11N.jpg';
import image755 from '../../assets/images/downloaded_images/SE-PH-OP-C2DP11P.jpg';
import image756 from '../../assets/images/downloaded_images/SE-PH-OP-C2DP40CP.jpg';
import image757 from '../../assets/images/downloaded_images/SE-PH-OP-C2DP40P.jpg';
import image758 from '../../assets/images/downloaded_images/SE-PH-OP-C2TP2000CP.jpg';
import image759 from '../../assets/images/downloaded_images/SE-PH-OP-C2TP2000N.jpg';
import image760 from '../../assets/images/downloaded_images/SE-PH-OP-CD2235VM12.jpg';
import image761 from '../../assets/images/downloaded_images/SE-PH-OP-CD33250PA.jpg';
import image762 from '../../assets/images/downloaded_images/SE-PH-OP-CD3350PA.jpg';
import image763 from '../../assets/images/downloaded_images/SE-PH-OP-CVSE1P20RA.jpg';
import image764 from '../../assets/images/downloaded_images/SE-PH-OP-D3RFTN.jpg';
import image765 from '../../assets/images/downloaded_images/SE-PH-OP-D3RFTSN.jpg';
import image766 from '../../assets/images/downloaded_images/SE-PH-OP-DM18TN.jpg';
import image767 from '../../assets/images/downloaded_images/SE-PH-OP-DM18TP.jpg';
import image768 from '../../assets/images/downloaded_images/SE-PH-OP-JDSW08P.jpg';
import image769 from '../../assets/images/downloaded_images/SE-PH-OP-JTS1000N.jpg';
import image770 from '../../assets/images/downloaded_images/SE-PH-OP-NFDB01.jpg';
import image771 from '../../assets/images/downloaded_images/SE-PH-OP-NFDF07.jpg';
import image772 from '../../assets/images/downloaded_images/SE-PH-OP-NFTM02.jpg';
import image773 from '../../assets/images/downloaded_images/SE-PH-OP-SRQ50PW.jpg';
import image774 from '../../assets/images/downloaded_images/SE-PH-OP-TOF3V2000P.jpg';
import image775 from '../../assets/images/downloaded_images/SE-PH-OP-TOF3V300P.jpg';
import image776 from '../../assets/images/downloaded_images/SE-PH-OP-V2R1200.jpg';
import image777 from '../../assets/images/downloaded_images/SE-PH-OP-V2R1200CDPPNP.jpg';
import image778 from '../../assets/images/downloaded_images/SE-PH-OP-V4T7000P.jpg';
import image779 from '../../assets/images/downloaded_images/SE-PH-OP-VD300T.jpg';
import image780 from '../../assets/images/downloaded_images/SE-PH-OP-VR1000.jpg';
import image781 from '../../assets/images/downloaded_images/SE-PH-OP-Z2D80P.jpg';
import image782 from '../../assets/images/downloaded_images/SE-PH-OP-Z2T2000P.jpg';
import image783 from '../../assets/images/downloaded_images/SE-PH-OP-Z3D100P.jpg';
import image784 from '../../assets/images/downloaded_images/SE-PH-OP-Z3TD1417H.jpg';
import image785 from '../../assets/images/downloaded_images/SE-PH-OP-ZR350P.jpg';
import image786 from '../../assets/images/downloaded_images/SE-PH-OP-ZRL1000P.jpg';
import image787 from '../../assets/images/downloaded_images/SE-PH-OP-ZRQX200P.jpg';
import image788 from '../../assets/images/downloaded_images/SE-PH-PA-CX412.jpg';
import image789 from '../../assets/images/downloaded_images/SE-PH-PA-CX442.jpg';
import image790 from '../../assets/images/downloaded_images/SE-PH-PA-CX442P.jpg';
import image791 from '../../assets/images/downloaded_images/SE-PH-PA-CX442PZ.jpg';
import image792 from '../../assets/images/downloaded_images/SE-PH-PA-CX444.jpg';
import image793 from '../../assets/images/downloaded_images/SE-PH-PA-CX444P.jpg';
import image794 from '../../assets/images/downloaded_images/SE-PH-PA-CX481.jpg';
import image795 from '../../assets/images/downloaded_images/SE-PH-PA-CX481P.jpg';
import image796 from '../../assets/images/downloaded_images/SE-PH-PA-CX491.jpg';
import image797 from '../../assets/images/downloaded_images/SE-PH-PA-CX491P.jpg';
import image798 from '../../assets/images/downloaded_images/SE-PH-PA-CX493.jpg';
import image799 from '../../assets/images/downloaded_images/SE-PH-PA-EXL211.jpg';
import image800 from '../../assets/images/downloaded_images/SE-PH-PA-HLG103AC5.jpg';
import image801 from '../../assets/images/downloaded_images/SE-PH-PA-LX101P.jpg';
import image802 from '../../assets/images/downloaded_images/SE-PH-PA-LX101Z.jpg';
import image803 from '../../assets/images/downloaded_images/SE-PH-PA-PMK45P.jpg';
import image804 from '../../assets/images/downloaded_images/SE-PH-PA-PML25.jpg';
import image805 from '../../assets/images/downloaded_images/SE-PH-PA-PML45.jpg';
import image806 from '../../assets/images/downloaded_images/SE-PH-PA-PMU25.jpg';
import image807 from '../../assets/images/downloaded_images/SE-PH-PA-PMY65.jpg';
import image808 from '../../assets/images/downloaded_images/SE-PH-PE-RL31542573C136.jpg';
import image809 from '../../assets/images/downloaded_images/SE-PH-SE-FOP03PNSCV8.jpg';
import image810 from '../../assets/images/downloaded_images/SE-PH-SE-OCV18DOPNORC5.jpg';
import image811 from '../../assets/images/downloaded_images/SE-PH-SE-OCV81CPNORMC5.jpg';
import image812 from '../../assets/images/downloaded_images/SE-PH-SE-OCV84CPSC.jpg';
import image813 from '../../assets/images/downloaded_images/SE-PH-SE-OLC18DP2.jpg';
import image814 from '../../assets/images/downloaded_images/SE-PH-SE-OLC18FP2.jpg';
import image815 from '../../assets/images/downloaded_images/SE-PH-SI-WTB4S3N1361.jpg';
import image816 from '../../assets/images/downloaded_images/SE-PH-TA-ASU30.jpg';
import image817 from '../../assets/images/downloaded_images/SE-PH-TA-DAS40R.jpg';
import image818 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS10RV.jpg';
import image819 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS15RMV.jpg';
import image820 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS3RV.jpg';
import image821 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS4RV.jpg';
import image822 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS4RVP.jpg';
import image823 from '../../assets/images/downloaded_images/SE-PH-TA-DLNS4V.jpg';
import image824 from '../../assets/images/downloaded_images/SE-PH-TA-DLS100P.jpg';
import image825 from '../../assets/images/downloaded_images/SE-PH-TA-DLS100R.jpg';
import image826 from '../../assets/images/downloaded_images/SE-PH-TA-DLS100RY5.jpg';
import image827 from '../../assets/images/downloaded_images/SE-PH-TA-DLS200P.jpg';
import image828 from '../../assets/images/downloaded_images/SE-PH-TA-DLS202R.jpg';
import image829 from '../../assets/images/downloaded_images/SE-PH-TA-DLS5R.jpg';
import image830 from '../../assets/images/downloaded_images/SE-PH-TA-ESNT16PN.jpg';
import image831 from '../../assets/images/downloaded_images/SE-PH-TA-F80R.jpg';
import image832 from '../../assets/images/downloaded_images/SE-PH-TA-GAMT1RPNJ.jpg';
import image833 from '../../assets/images/downloaded_images/SE-PH-TA-GR02SPNJ.jpg';
import image834 from '../../assets/images/downloaded_images/SE-PH-TA-GR12GN.jpg';
import image835 from '../../assets/images/downloaded_images/SE-PH-TA-GT205.jpg';
import image836 from '../../assets/images/downloaded_images/SE-PH-TA-GT3RSN.jpg';
import image837 from '../../assets/images/downloaded_images/SE-PH-TA-GTL3RSN.jpg';
import image838 from '../../assets/images/downloaded_images/SE-PH-TA-GTL7SN.jpg';
import image839 from '../../assets/images/downloaded_images/SE-PH-TA-GTR7SPN.jpg';
import image840 from '../../assets/images/downloaded_images/SE-PH-TA-HD301N.jpg';
import image841 from '../../assets/images/downloaded_images/SE-PH-TA-HDA300A.jpg';
import image842 from '../../assets/images/downloaded_images/SE-PH-TA-LDM10R.jpg';
import image843 from '../../assets/images/downloaded_images/SE-PH-TA-LDS20RPN.jpg';
import image844 from '../../assets/images/downloaded_images/SE-PH-TA-NAT20RF.jpg';
import image845 from '../../assets/images/downloaded_images/SE-PH-TA-NER10DDC.jpg';
import image846 from '../../assets/images/downloaded_images/SE-PH-TA-SSPS204R.jpg';
import image847 from '../../assets/images/downloaded_images/SE-PH-TA-UM2T15DTP.jpg';
import image848 from '../../assets/images/downloaded_images/SE-PH-TA-UMTL50S.jpg';
import image849 from '../../assets/images/downloaded_images/SE-PH-TA-UMTR15DT.jpg';
import image850 from '../../assets/images/downloaded_images/SE-PH-TA-UMTR50DS.jpg';
import image851 from '../../assets/images/downloaded_images/SE-PH-TA-UMZ3SV.jpg';
import image852 from '../../assets/images/downloaded_images/SE-PH-TA-USAS1AN.jpg';
import image853 from '../../assets/images/downloaded_images/SE-PH-TA-UXR5V.jpg';
import image854 from '../../assets/images/downloaded_images/SE-PH-TA-UXR5VPN.jpg';
import image855 from '../../assets/images/downloaded_images/SE-PH-TA-UXT50DS.jpg';
import image856 from '../../assets/images/downloaded_images/SE-PH-TA-UXT50DSPN.jpg';
import image857 from '../../assets/images/downloaded_images/SE-PH-WE-OY1TA603P0003.jpg';
import image858 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN100NO.jpg';
import image859 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN100NOC5.jpg';
import image860 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN10NCV6.jpg';
import image861 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN10NO.jpg';
import image862 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN10NOV6.jpg';
import image863 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN10PO.jpg';
import image864 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN10POV6.jpg';
import image865 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN15NOC5.jpg';
import image866 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN15PO.jpg';
import image867 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN22NO.jpg';
import image868 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN22NOC5.jpg';
import image869 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN22NOV6.jpg';
import image870 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN22PO.jpg';
import image871 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN22POV6SP62.jpg';
import image872 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN30NOV6.jpg';
import image873 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN30POV6.jpg';
import image874 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN3NO.jpg';
import image875 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN3PO.jpg';
import image876 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN44NO.jpg';
import image877 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN44PO.jpg';
import image878 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN44PSC.jpg';
import image879 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN5NO.jpg';
import image880 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN5NOV6.jpg';
import image881 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN5PO.jpg';
import image882 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN5POC5.jpg';
import image883 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN5POV6.jpg';
import image884 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN63NO.jpg';
import image885 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN63NOC5.jpg';
import image886 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN63PO.jpg';
import image887 from '../../assets/images/downloaded_images/SE-RI-SE-B01AN63POC5.jpg';
import image888 from '../../assets/images/downloaded_images/SE-TE-CA-PT100180410MS150.jpg';
import image889 from '../../assets/images/downloaded_images/SE-TE-CA-PT10018042M.jpg';
import image890 from '../../assets/images/downloaded_images/SE-TE-CA-PT10018047M.jpg';
import image891 from '../../assets/images/downloaded_images/SE-TE-GR-TSSLGX926896.jpg';
import image892 from '../../assets/images/downloaded_images/SE-TE-SI-PT100.jpg';

const images = {
    "AC-CA-IT-FLSRS4851000": image1,
    "AC-MO-DI-SKTPN1": image2,
    "AC-PU-CA-PB22SIM41G": image3,
    "AC-PU-CA-PB22SM41K": image4,
    "AC-PU-EL-RFSAI61B": image5,
    "AC-RE-BA-RFDA73MRGB": image6,
    "AC-RE-BA-RFSA62B": image7,
    "AC-RE-SE-SCT2": image8,
    "AC-RE-SI-PL10F": image9,
    "AC-RE-TA-S510G": image10,
    "AC-SO-CA-ZMI2NA": image11,
    "AC-SO-CA-ZMI4NA": image12,
    "AC-SO-CA-ZPD11A": image13,
    "AC-SO-CA-ZPD12A": image14,
    "AC-SO-CA-ZPD8A": image15,
    "AC-SO-CA-ZPYS2S": image16,
    "CO-PL-AR-AF10MRD": image17,
    "CO-PO-TA-SPL1R100200VAC": image18,
    "CO-PR-CA-GAP1605": image19,
    "CO-PR-CA-SCTL55": image20,
    "CO-PR-CA-UCP1": image21,
    "CO-SM-CA-SPD24RM20": image22,
    "CO-TE-PA-P908X702020000AA": image23,
    "CO-TE-PA-P909X301010000AA": image24,
    "CO-TI-CA-DAA51CM24": image25,
    "CU-1--CA-CTA5X100A5A": image26,
    "CU-CU-CA-A8220100": image27,
    "CU-SP-CA-MI100": image28,
    "OT-DU-DU-G88102201": image29,
    "OT-DU-DU-GS38910125230": image30,
    "OT-DU-DU-GS73800080": image31,
    "OT-DU-DU-GS751021921": image32,
    "RE-CO-CA-CGMS9D24S10": image33,
    "RE-CO-CA-GDP322S120V": image34,
    "RE-HE-CA-RHS00": image35,
    "RE-HE-CA-RHS100": image36,
    "RE-HE-CA-RHS301": image37,
    "RE-HE-CA-RHS45B": image38,
    "RE-HE-CA-RHS703": image39,
    "RE-HE-CA-RHS90A": image40,
    "RE-IN-CA-RCP1100315": image41,
    "RE-IN-CA-RCP1100324": image42,
    "RE-IN-CA-RMIA210115120VAC": image43,
    "RE-IN-CA-RMIA210230VAC": image44,
    "RE-IN-CA-RMIA21024VDC": image45,
    "RE-IN-CA-RMIA45115120VAC": image46,
    "RE-IN-CA-RMIA45115VAC": image47,
    "RE-IN-CA-RMIA45230VAC": image48,
    "RE-IN-CA-RMIA4524VAC": image49,
    "RE-IN-CA-RMIA4524VDC": image50,
    "RE-IN-CA-RPYS002024DLT": image51,
    "RE-IN-FI-465290240074": image52,
    "RE-IN-FI-563490240074": image53,
    "RE-ME-EL-MR42UNI": image54,
    "RE-MO-CA-DFC01DB23": image55,
    "RE-MO-CA-DIA01CD485A": image56,
    "RE-MO-CA-DIA53S72420A": image57,
    "RE-MO-CA-DIA53S72420AB004": image58,
    "RE-MO-CA-DIA53S72450A": image59,
    "RE-MO-CA-DIB01CB2310A": image60,
    "RE-MO-CA-DIB01CB235A": image61,
    "RE-MO-CA-DIB02CD48150MV": image62,
    "RE-MO-CA-DPA55CM44": image63,
    "RE-MO-CA-DPB01CM23": image64,
    "RE-MO-CA-DPB01CM48": image65,
    "RE-MO-CA-DPB51CM44": image66,
    "RE-MO-CA-DPC01DM48": image67,
    "RE-MO-CA-DPC01DM49400HZ": image68,
    "RE-MO-CA-DUA52C724": image69,
    "RE-MO-CA-DUB01CB23500V": image70,
    "RE-MO-CA-DUB01CD48500V": image71,
    "RE-MO-CA-DUB02CT23": image72,
    "RE-MO-CA-SM1552302K": image73,
    "RE-MO-EL-HRN43N230V": image74,
    "RE-SO-CA-RFPMV10": image75,
    "RE-SO-CA-RGTS24120GV00": image76,
    "RE-SO-CA-RSBT4032EVC1HP": image77,
    "RE-SO-CA-RSCAAM60": image78,
    "RE-SO-CA-RSGD4012E0VD210": image79,
    "RE-SO-CA-RSO4850": image80,
    "RE-SS-CA-RA23110H06POS": image81,
    "RE-SS-CA-RA2425D06": image82,
    "RE-SS-CA-RA2A23D25": image83,
    "RE-SS-CA-RA4025D08L": image84,
    "RE-SS-CA-RA4025L10NCSS00": image85,
    "RE-SS-CA-RA4825H12PCSS18": image86,
    "RE-SS-CA-RAM160D100G": image87,
    "RE-SS-CA-RAM1A60D100": image88,
    "RE-SS-CA-RAM1A60D100G": image89,
    "RE-SS-CA-RE2410AA06": image90,
    "RE-SS-CA-RGC1A23A20KKE": image91,
    "RE-SS-CA-RGC1A23D25KKE": image92,
    "RE-SS-CA-RGC1A60A42KGE": image93,
    "RE-SS-CA-RGC1A60A42KGU": image94,
    "RE-SS-CA-RGC1A60A60KGE": image95,
    "RE-SS-CA-RGC1A60A60KGU": image96,
    "RE-SS-CA-RGC1A60A62GGEP": image97,
    "RE-SS-CA-RGC1A60D15KKE": image98,
    "RE-SS-CA-RGC1A60D20KGU": image99,
    "RE-SS-CA-RGC1A60D20KKE": image100,
    "RE-SS-CA-RGC1A60D25KGU": image101,
    "RE-SS-CA-RGC1A60D25KKE": image102,
    "RE-SS-CA-RGC1A60D25KKEC": image103,
    "RE-SS-CA-RGC1A60D30GKEP": image104,
    "RE-SS-CA-RGC1A60D30KKE": image105,
    "RE-SS-CA-RGC1A60D40KGE": image106,
    "RE-SS-CA-RGC1A60D40KGU": image107,
    "RE-SS-CA-RGC1A60D42KGE": image108,
    "RE-SS-CA-RGC1A60D42KGU": image109,
    "RE-SS-CA-RGC1A60D60KGE": image110,
    "RE-SS-CA-RGC1A60D62KGE": image111,
    "RE-SS-CA-RGC1A60D92GGEP": image112,
    "RE-SS-CA-RGC1P48AA42ET": image113,
    "RE-SS-CA-RGC1P48V12ED": image114,
    "RE-SS-CA-RGC1S60D41GGEP": image115,
    "RE-SS-CA-RGC1S60D41GGUP": image116,
    "RE-SS-CA-RGC2A60D25KKE": image117,
    "RE-SS-CA-RGC2A60D75GGEDF": image118,
    "RE-SS-CA-RGC2A60D75GGEDFP85": image119,
    "RE-SS-CA-RGC2P60V25C1DM": image120,
    "RE-SS-CA-RGC3A60A40GGEAF": image121,
    "RE-SS-CA-RGC3A60A65GGEAFM": image122,
    "RE-SS-CA-RGC3A60D20GKEDM": image123,
    "RE-SS-CA-RGC3A60D20KKE": image124,
    "RE-SS-CA-RGC3A60D40GGEDF": image125,
    "RE-SS-CA-RGC3A60D65GGEDF": image126,
    "RE-SS-CA-RGC3P60I20EDP": image127,
    "RE-SS-CA-RGC3P60I30EDP": image128,
    "RE-SS-CA-RGC3P60I65EAFP": image129,
    "RE-SS-CA-RGC3P60I65EDFP": image130,
    "RE-SS-CA-RGC3P60V30C1DM": image131,
    "RE-SS-CA-RGCM3A60D15GKE": image132,
    "RE-SS-CA-RGH1A60D31KKE": image133,
    "RE-SS-CA-RGS1A23D25KKE": image134,
    "RE-SS-CA-RGS1A60D50KKE": image135,
    "RE-SS-CA-RGS1A60D50MKES275": image136,
    "RE-SS-CA-RGS1A60D90KKE": image137,
    "RE-SS-CA-RK2A60D50P": image138,
    "RE-SS-CA-RM1A23A50": image139,
    "RE-SS-CA-RM1A23A75": image140,
    "RE-SS-CA-RM1A23D25": image141,
    "RE-SS-CA-RM1A23D50": image142,
    "RE-SS-CA-RM1A40A25": image143,
    "RE-SS-CA-RM1A40D50": image144,
    "RE-SS-CA-RM1A48A100": image145,
    "RE-SS-CA-RM1A48A25": image146,
    "RE-SS-CA-RM1A48A50": image147,
    "RE-SS-CA-RM1A48D100": image148,
    "RE-SS-CA-RM1A48D50": image149,
    "RE-SS-CA-RM1A48D50S18": image150,
    "RE-SS-CA-RM1A48D75": image151,
    "RE-SS-CA-RM1A48D75LP40": image152,
    "RE-SS-CA-RM1A60D50": image153,
    "RE-SS-CA-RM1A60D75": image154,
    "RE-SS-CA-RM1C40D50": image155,
    "RE-SS-CA-RM1D060D100": image156,
    "RE-SS-CA-RM1E23AA25": image157,
    "RE-SS-CA-RM1E40AA25": image158,
    "RE-SS-CA-RM1E48AA25": image159,
    "RE-SS-CA-RM1E48AA50": image160,
    "RE-SS-CA-RP1A23D3": image161,
    "RE-SS-CA-RP1A23D5M1": image162,
    "RE-SS-CA-RP1A40D5": image163,
    "RE-SS-CA-RP1A48D3": image164,
    "RE-SS-CA-RP1D060D4": image165,
    "RE-SS-CA-RPYS002024DLT": image166,
    "RE-SS-CA-RR2A40D400": image167,
    "RE-SS-CA-RS1A23A225": image168,
    "RE-SS-CA-RS1A23A240": image169,
    "RE-SS-CA-RS1A23D40": image170,
    "RE-SS-CA-RS1A40A240": image171,
    "RE-SS-CA-RS1A40D25": image172,
    "RE-SS-CA-RS1A40D25EB": image173,
    "RE-SS-CA-RS1A40D40": image174,
    "RE-SS-CA-RS1A40D40E": image175,
    "RE-SS-CA-RS1A48D10": image176,
    "RE-SS-CA-RS1A48D100E": image177,
    "RE-SS-CA-RS1A48D40": image178,
    "RE-SS-CA-RS1A48D80E": image179,
    "RE-SS-CA-RZ3A40A40": image180,
    "RE-SS-CA-RZ3A40A75": image181,
    "RE-SS-CA-RZ3A40D25": image182,
    "RE-SS-CA-RZ3A40D40": image183,
    "RE-SS-CA-RZ3A40D55": image184,
    "RE-SS-CA-RZ3A60D25": image185,
    "RE-SS-CR-CWA4890": image186,
    "RE-SS-CR-ELS4850": image187,
    "RE-SS-FI-348170249024": image188,
    "RE-TH-SE-3UA50001K": image189,
    "RE-TI-CA-PBB01DM24": image190,
    "RE-TI-CA-PMB01DM24": image191,
    "RE-TI-CA-PMC01C024": image192,
    "RE-TI-EL-PRM92HUNI": image193,
    "SA-CU-TA-XGM2T20A": image194,
    "SA-CU-TA-XGM2TL20": image195,
    "SA-LE-CA-SMS01": image196,
    "SA-LE-CA-SMS02LD": image197,
    "SA-LE-CA-SMSA2P02": image198,
    "SA-MA-CA-SMS31": image199,
    "SA-MA-TE-TRS542": image200,
    "SA-RE-CA-NA13CT": image201,
    "SA-RE-CA-NES13DB24SA": image202,
    "SA-RE-CA-SME41": image203,
    "SA-RE-MA-SGEFS1044L": image204,
    "SA-SA-MA-SLW1K2GP50CR1180": image205,
    "SA-SA-MA-SLW1K2GP50CR1270": image206,
    "SE-AR-BE-IXIODT1": image207,
    "SE-AR-BE-LZRFLATSCANRS305": image208,
    "SE-AR-PA-NA111PN": image209,
    "SE-AR-TA-SS10T16": image210,
    "SE-AR-TA-SS10T16PN": image211,
    "SE-AR-TA-SSCTR810": image212,
    "SE-AR-TA-XIT3": image213,
    "SE-CA-CA-CA12CLC08BPRT": image214,
    "SE-CA-CA-CA18CAF08NAM1": image215,
    "SE-CA-CA-CA18CAN12PA": image216,
    "SE-CA-CA-CA18CAN12PAM1": image217,
    "SE-CA-CA-CA30CAF16NAM1": image218,
    "SE-CA-CA-CA30CAF16PA": image219,
    "SE-CA-CA-CA30CAF16PAM1": image220,
    "SE-CA-CA-CA30CAN25NA": image221,
    "SE-CA-CA-CA30CAN25NAM1": image222,
    "SE-CA-CA-CA30CAN25PAM1": image223,
    "SE-CA-CA-CA30CLL30BP": image224,
    "SE-CA-CA-CA30CLL30BPM1": image225,
    "SE-CA-CA-CB18CLN12TCFT": image226,
    "SE-CA-CA-EC3016NPAPL": image227,
    "SE-CA-CA-EC3016NPASL1": image228,
    "SE-CA-CA-EC3016PPAPL": image229,
    "SE-CA-CA-EC3016PPAPL1": image230,
    "SE-CA-CA-EC3016PPASL1": image231,
    "SE-CA-CA-EC3025NPAPL": image232,
    "SE-CA-CA-EC3025PPAPL": image233,
    "SE-CA-CA-EC5525NPAP": image234,
    "SE-CA-CA-EC5525PPAP": image235,
    "SE-CA-CA-EC5525PPAP1": image236,
    "SE-CA-CA-ECH3010PPAT1": image237,
    "SE-CA-CA-NDS12BB24SA": image238,
    "SE-CA-CA-VC12RN230": image239,
    "SE-CA-FO-CP3050C": image240,
    "SE-CA-IF-KG5043": image241,
    "SE-CA-SE-K0130POC5": image242,
    "SE-CA-SE-K0130PSCC5": image243,
    "SE-CA-SE-K1320PCC5": image244,
    "SE-CA-SE-K1320POC5": image245,
    "SE-CA-SE-K13G20NO": image246,
    "SE-CA-SE-K13G20PO": image247,
    "SE-CA-SE-K13G20POSP122": image248,
    "SE-CA-SE-K14E30PSCC5": image249,
    "SE-CA-SE-K14EG32PSC": image250,
    "SE-CA-XE-CHT12N8BPC60A2S": image251,
    "SE-CA-XE-CS12S4NO60A2P": image252,
    "SE-CO-AK-ESE10N": image253,
    "SE-CO-BA-R58ECRGB2": image254,
    "SE-CO-CA-LD30CPBR10BPA2IO": image255,
    "SE-CO-CA-LD32CND15PPT": image256,
    "SE-CO-CA-LD32CNP10PPT": image257,
    "SE-CO-DA-TL50W815": image258,
    "SE-CO-DA-TLU011": image259,
    "SE-CO-EM-UVX300": image260,
    "SE-CO-EM-UVX30TP": image261,
    "SE-CO-IN-MR90V": image262,
    "SE-FI-CA-FA1N": image263,
    "SE-FI-CA-FGT01MCM200": image264,
    "SE-FI-CA-FPD01SBS200": image265,
    "SE-FI-CA-FPDC02SCC100": image266,
    "SE-FI-CA-PD60CNV20BP": image267,
    "SE-FI-CA-PD60CNX20BPT": image268,
    "SE-FI-KE-FSM1P": image269,
    "SE-FI-KE-FU66": image270,
    "SE-FI-PA-FD61": image271,
    "SE-FI-PA-FX102PCC2": image272,
    "SE-FI-PA-FX301": image273,
    "SE-FI-PA-FX301P": image274,
    "SE-FI-PA-FX501": image275,
    "SE-FI-PA-FXMR2": image276,
    "SE-FI-TA-F2R": image277,
    "SE-FI-TA-F5N": image278,
    "SE-FI-TA-F5RN": image279,
    "SE-FI-TA-F70AR": image280,
    "SE-FI-TA-F70RPNJE": image281,
    "SE-FI-TA-F71CR": image282,
    "SE-FI-TA-F71CRPN": image283,
    "SE-FI-TA-F71RAN": image284,
    "SE-FI-TA-F71RPN": image285,
    "SE-FI-TA-F7K1": image286,
    "SE-FI-TA-F7K2": image287,
    "SE-FI-TA-F7K3": image288,
    "SE-FI-TA-F7K4": image289,
    "SE-FI-TA-F80RPN": image290,
    "SE-FI-TA-F85RN": image291,
    "SE-FI-TA-FA181BC": image292,
    "SE-FI-TA-FA191BC": image293,
    "SE-FI-TA-FA252M": image294,
    "SE-FI-TA-FA500": image295,
    "SE-FI-TA-FA7CN": image296,
    "SE-FI-TA-FBC4R2L": image297,
    "SE-FI-TA-FDA300P": image298,
    "SE-FI-TA-FR105BC": image299,
    "SE-FI-TA-FR108BC": image300,
    "SE-FI-TA-FR505": image301,
    "SE-FI-TA-FR5BC": image302,
    "SE-FI-TA-FR7BC": image303,
    "SE-FI-TA-FR8BC": image304,
    "SE-FI-TA-FRH7BC": image305,
    "SE-FI-TA-FRL702BC": image306,
    "SE-FI-TA-FRL732BC": image307,
    "SE-FI-TA-FT101AD2": image308,
    "SE-FI-TA-FT7BC": image309,
    "SE-FI-TA-FT81BC": image310,
    "SE-FI-TA-FTL101": image311,
    "SE-FI-TA-FU712BC": image312,
    "SE-FI-TA-FU901BC": image313,
    "SE-FI-TA-FX220J": image314,
    "SE-FI-TA-FX84BC": image315,
    "SE-FO-BA-SL30": image316,
    "SE-FO-CA-DU6E": image317,
    "SE-FO-DA-SR21IR": image318,
    "SE-FO-SE-FOM80PNSCV8": image319,
    "SE-FO-SE-FOV02PNSCV8": image320,
    "SE-FO-SE-FOV03PNSCV8": image321,
    "SE-FO-SE-FOV20PNOV6": image322,
    "SE-FO-SE-FOV30PNSCC5": image323,
    "SE-FO-SE-FOV50PNSCC5": image324,
    "SE-FO-TE-XUVE04M3KSNM8": image325,
    "SE-FO-TE-XUVU06M3KSNM8": image326,
    "SE-HM-AU-FD32005": image327,
    "SE-HM-HO-C7027A1023": image328,
    "SE-HM-TA-F38A": image329,
    "SE-HM-TA-FDA320": image330,
    "SE-HM-TA-FS1000E": image331,
    "SE-HM-TA-FS2000E": image332,
    "SE-HM-TA-FS5000E": image333,
    "SE-HM-TA-HD301A": image334,
    "SE-HM-TA-HD301N": image335,
    "SE-HM-TA-HD601N": image336,
    "SE-HM-TA-KD50": image337,
    "SE-IN-AU-PSN178DNUF": image338,
    "SE-IN-CA-EI0601NACS": image339,
    "SE-IN-CA-EI0801NACS": image340,
    "SE-IN-CA-EI1202NPCPL": image341,
    "SE-IN-CA-EI1202NPOPL": image342,
    "SE-IN-CA-EI1202NPOPL1": image343,
    "SE-IN-CA-EI1202NPOPS1": image344,
    "SE-IN-CA-EI1202NPOSL": image345,
    "SE-IN-CA-EI1202PPCPL": image346,
    "SE-IN-CA-EI1202PPCSS": image347,
    "SE-IN-CA-EI1202PPOPL": image348,
    "SE-IN-CA-EI1202PPOSL1": image349,
    "SE-IN-CA-EI1202TBOSL": image350,
    "SE-IN-CA-EI1204NPOSS1": image351,
    "SE-IN-CA-EI1204PPCSL": image352,
    "SE-IN-CA-EI1204PPOPL": image353,
    "SE-IN-CA-EI1204PPOSL": image354,
    "SE-IN-CA-EI1204PPOSL1": image355,
    "SE-IN-CA-EI1204PPOSS1": image356,
    "SE-IN-CA-EI1204TBOSL": image357,
    "SE-IN-CA-EI1805I0201": image358,
    "SE-IN-CA-EI1805NPOPL": image359,
    "SE-IN-CA-EI1805PPCSL1": image360,
    "SE-IN-CA-EI1805PPOPL": image361,
    "SE-IN-CA-EI1805TBCSL": image362,
    "SE-IN-CA-EI1808PPCSL1": image363,
    "SE-IN-CA-EI1808PPOS1531": image364,
    "SE-IN-CA-EI1808PPOSL": image365,
    "SE-IN-CA-EI1808PPOSS": image366,
    "SE-IN-CA-EI1808PPOSS1": image367,
    "SE-IN-CA-EI1808TBOPS": image368,
    "SE-IN-CA-EI1808TBOSL": image369,
    "SE-IN-CA-EI1808TBOSS": image370,
    "SE-IN-CA-EI3010NPOSS": image371,
    "SE-IN-CA-EI3010PPCSS": image372,
    "SE-IN-CA-EI3010PPOS": image373,
    "SE-IN-CA-EI3010PPOSL": image374,
    "SE-IN-CA-EI3010PPOSS": image375,
    "SE-IN-CA-EI3010PPOSS1556": image376,
    "SE-IN-CA-EI3010TBOPS6": image377,
    "SE-IN-CA-EI3015PPOPL": image378,
    "SE-IN-CA-EI3015PPOSL": image379,
    "SE-IN-CA-EI3015TBCPL": image380,
    "SE-IN-CA-EI3015TBCSL": image381,
    "SE-IN-CA-EI3015TBOPL": image382,
    "SE-IN-CA-EI3015TBOSL": image383,
    "SE-IN-CA-EI5515PPAP": image384,
    "SE-IN-CA-EI5515PPAP1": image385,
    "SE-IN-CA-EISH200MA024": image386,
    "SE-IN-CA-EO1804NPAS": image387,
    "SE-IN-CA-IA05BSF08POP033": image388,
    "SE-IN-CA-IA05BSF10NOP": image389,
    "SE-IN-CA-IA05BSF10POM5P": image390,
    "SE-IN-CA-IA06BSF10PC": image391,
    "SE-IN-CA-IA06BSF10PCM5": image392,
    "SE-IN-CA-IA06BSF10POM5": image393,
    "SE-IN-CA-IA08BLN25PO": image394,
    "SE-IN-CA-IA08BSF02DC": image395,
    "SE-IN-CA-IA08BSF02DO": image396,
    "SE-IN-CA-IA08BSF15NC": image397,
    "SE-IN-CA-IA08BSF15NOM5": image398,
    "SE-IN-CA-IA08BSF15PCM5": image399,
    "SE-IN-CA-IA08BSF15POM5": image400,
    "SE-IN-CA-IA08BSF20PC": image401,
    "SE-IN-CA-IA12ASF04DOM1": image402,
    "SE-IN-CA-IA12ASN08DCM1": image403,
    "SE-IN-CA-IA12DSF02NC": image404,
    "SE-IN-CA-IA12DSF02PO": image405,
    "SE-IN-CA-IA12DSF04DO": image406,
    "SE-IN-CA-IA12DSN04NO": image407,
    "SE-IN-CA-IA12DSN08DO": image408,
    "SE-IN-CA-IA12ESF02UCM1": image409,
    "SE-IN-CA-IA12ESN04UC": image410,
    "SE-IN-CA-IA18ASN08PCM1": image411,
    "SE-IN-CA-IA18ASN08POM1": image412,
    "SE-IN-CA-IA18ASN14DCM1": image413,
    "SE-IN-CA-IA18DSF05NO": image414,
    "SE-IN-CA-IA18DSF08DO": image415,
    "SE-IN-CA-IA18DSF08NO": image416,
    "SE-IN-CA-IA18DSN08NO": image417,
    "SE-IN-CA-IA18DSN08PC": image418,
    "SE-IN-CA-IA18DSN08PO": image419,
    "SE-IN-CA-IA18ELF05UC": image420,
    "SE-IN-CA-IA18ELN08UC": image421,
    "SE-IN-CA-IA18ESF05UCM1": image422,
    "SE-IN-CA-IA30ASN15POM1": image423,
    "SE-IN-CA-IA30ASN22POM1": image424,
    "SE-IN-CA-IA30DSF15DC": image425,
    "SE-IN-CA-IA30DSF15NO": image426,
    "SE-IN-CA-IA30DSF15PO": image427,
    "SE-IN-CA-IA30DSN22NO": image428,
    "SE-IN-CA-IA30DSN22PO": image429,
    "SE-IN-CA-IC40CNN30COT1": image430,
    "SE-IN-CA-IC40CNN30NAT1": image431,
    "SE-IN-CA-IC40CNN30PAT1": image432,
    "SE-IN-CA-IC40CNN30TAT1": image433,
    "SE-IN-CA-ICB12L50F04A2IO": image434,
    "SE-IN-CA-ICB12L50F04NO": image435,
    "SE-IN-CA-ICB12L50F04PC": image436,
    "SE-IN-CA-ICB12L50F04POM1": image437,
    "SE-IN-CA-ICB12L50N08PO": image438,
    "SE-IN-CA-ICB12S30F02PO": image439,
    "SE-IN-CA-ICB12S30F04PA": image440,
    "SE-IN-CA-ICB12S30F04POM1": image441,
    "SE-IN-CA-ICB12SF04PO5M": image442,
    "SE-IN-CA-ICB18L50F05NO": image443,
    "SE-IN-CA-ICB18L50F05POM1": image444,
    "SE-IN-CA-ICB18L50F08NA": image445,
    "SE-IN-CA-ICB18L50F08PO": image446,
    "SE-IN-CA-ICB18L50N14PO": image447,
    "SE-IN-CA-ICB18S30F05PO": image448,
    "SE-IN-CA-ICB18S30F08POM1": image449,
    "SE-IN-CA-ICB18S30F12NO": image450,
    "SE-IN-CA-ICB18S30F12PO": image451,
    "SE-IN-CA-ICB18S30N08PO": image452,
    "SE-IN-CA-ICB18S30N08POM1": image453,
    "SE-IN-CA-ICB18S30N14PO": image454,
    "SE-IN-CA-ICB18S30N14POM1": image455,
    "SE-IN-CA-ICB30L50F22PO": image456,
    "SE-IN-CA-ICB30L50F22POM1": image457,
    "SE-IN-CA-ICB30L50N15PO": image458,
    "SE-IN-CA-ICB30L50N40PO": image459,
    "SE-IN-CA-ICB30S30N15PO": image460,
    "SE-IN-CA-ICS05S23F08A2NO": image461,
    "SE-IN-CA-ICS05S23F15A2IO": image462,
    "SE-IN-CA-ICS05S23F15A2NO": image463,
    "SE-IN-CA-ICS05S23F15M5PO": image464,
    "SE-IN-CA-ICS08L45F01PC": image465,
    "SE-IN-CA-ICS08L45F01PCM5": image466,
    "SE-IN-CA-ICS08L45F01POM5": image467,
    "SE-IN-CA-ICS08L45F02POM5": image468,
    "SE-IN-CA-ICS08L45F20A2IO": image469,
    "SE-IN-CA-ICS08L45N02PO": image470,
    "SE-IN-CA-ICS08L45N40M5IO": image471,
    "SE-IN-CA-ICS08S30F01NO": image472,
    "SE-IN-CA-ICS08S30F01POM5": image473,
    "SE-IN-CA-ICS08S30F02PC": image474,
    "SE-IN-CA-ICS08S30F02PO": image475,
    "SE-IN-CA-ICS08S30F20A2IO": image476,
    "SE-IN-CA-ICS08S30F20A2PO": image477,
    "SE-IN-CA-ICS08S30N40A2IO": image478,
    "SE-IN-CA-ID25ANC05NAK": image479,
    "SE-IN-CA-ID25ANC05PAK": image480,
    "SE-IN-CA-IRC40SN40M1PA": image481,
    "SE-IN-CA-LDD2PA2DU24": image482,
    "SE-IN-CA-LDP1PA2DU24": image483,
    "SE-IN-CA-LDP2PA2DU24": image484,
    "SE-IN-CA-MA3": image485,
    "SE-IN-CA-SME41": image486,
    "SE-IN-IN-ID183008PA": image487,
    "SE-IN-IN-IS104": image488,
    "SE-IN-IN-IS105": image489,
    "SE-IN-IN-IS13": image490,
    "SE-IN-IN-IS37D": image491,
    "SE-IN-IN-IS38D": image492,
    "SE-IN-IN-IS43D": image493,
    "SE-IN-IN-IS46D": image494,
    "SE-IN-IN-ISI44SEX": image495,
    "SE-IN-IN-ISI59SEX": image496,
    "SE-IN-IN-LR18XBN08DPOE2": image497,
    "SE-IN-LE-IS118MM4NO8E0M12": image498,
    "SE-IN-OM-E2ECCR8D12M": image499,
    "SE-IN-OM-E2EYX8C12M": image500,
    "SE-IN-OM-E2SQ15": image501,
    "SE-IN-OM-TLQ5MC12M": image502,
    "SE-IN-PA-GX18MU": image503,
    "SE-IN-PA-GXF12A": image504,
    "SE-IN-PA-GXF15BPC5": image505,
    "SE-IN-PA-GXF8AP": image506,
    "SE-IN-PA-GXF8BP": image507,
    "SE-IN-PA-GXH12BP": image508,
    "SE-IN-PA-GXH8A": image509,
    "SE-IN-PA-GXL15FLUBC5": image510,
    "SE-IN-PA-GXL15FU": image511,
    "SE-IN-PA-GXL15FUB": image512,
    "SE-IN-PA-GXL15FUBC5": image513,
    "SE-IN-PA-GXL15FUC5": image514,
    "SE-IN-SE-A01CF24": image515,
    "SE-IN-SE-B0181NOC5": image516,
    "SE-IN-SE-B01E124POC5": image517,
    "SE-IN-SE-B01E82POC5": image518,
    "SE-IN-SE-B01EG82PO": image519,
    "SE-IN-SE-B01G6515PC": image520,
    "SE-IN-SE-B01Q815P0T24": image521,
    "SE-IN-SE-B01QE8050PO": image522,
    "SE-IN-SE-B01QE8050PSC": image523,
    "SE-IN-SE-B0281P0V6": image524,
    "SE-IN-SE-B02G122PC": image525,
    "SE-IN-SE-B033020POC5": image526,
    "SE-IN-SE-B03G188PO": image527,
    "SE-IN-SE-B03QE8080PO": image528,
    "SE-IN-SE-B04G653PO": image529,
    "SE-IN-SE-B08EN3015SC": image530,
    "SE-IN-SE-B15EG3015PO": image531,
    "SE-IN-SE-B50E189V010C5": image532,
    "SE-IN-SE-B50EG124V010": image533,
    "SE-IN-SE-B50EG189V010": image534,
    "SE-IN-SE-B50EG3015V010": image535,
    "SE-IN-SE-B50EN187V03": image536,
    "SE-IN-SE-B50G122A010": image537,
    "SE-IN-SE-B50G3010V010": image538,
    "SE-IN-SE-B60122POC5": image539,
    "SE-IN-SE-BCR1G3010PO": image540,
    "SE-IN-SE-C01EG5035A0": image541,
    "SE-IN-SE-MB526DIS351": image542,
    "SE-IN-SE-MB526PFA": image543,
    "SE-IN-SI-IM050B8PSZWBS02": image544,
    "SE-IN-TA-PD132": image545,
    "SE-IN-TA-PD232": image546,
    "SE-IN-TU-NI60K90SRFZ3X2": image547,
    "SE-IN-XE-IHP12S15NO56N12": image548,
    "SE-IN-XE-IHT30N15CPO55N2T": image549,
    "SE-IN-XE-IHT30S10BPO55A2S": image550,
    "SE-IN-XE-IHT30S10CN055N2T": image551,
    "SE-IN-XE-IPS12N10PO68A12": image552,
    "SE-IN-XE-IPS12N12PC50A2P": image553,
    "SE-IN-XE-IPS12N8PO50A2P": image554,
    "SE-IN-XE-IPS12S4NC50A2P": image555,
    "SE-IN-XE-IPS12S4NCO50A2P": image556,
    "SE-IN-XE-IPS12S4PO50A2P": image557,
    "SE-IN-XE-IPS12S4PO50M12": image558,
    "SE-IN-XE-IPS12S6PO50M12": image559,
    "SE-IN-XE-IPS12S6PO68M12": image560,
    "SE-IN-XE-IPS18N20PO53A12": image561,
    "SE-IN-XE-IPS18N8PO40A2P": image562,
    "SE-IN-XE-IPS18S12PO48A12": image563,
    "SE-IN-XE-IPS18S12PO48M12": image564,
    "SE-IN-XE-IPS18S8PC55A2P": image565,
    "SE-IN-XE-IPS30N15U055A2P": image566,
    "SE-IN-XE-IPS30N25A055A2P": image567,
    "SE-IN-XE-IPS30N25NCO55A2P": image568,
    "SE-IN-XE-IPS30N40NO55A2P": image569,
    "SE-IN-XE-IPS30N40PO79A12": image570,
    "SE-IN-XE-IPS30S10PC48M12": image571,
    "SE-IN-XE-IPS30S16PO79M12": image572,
    "SE-IN-XE-IPS30S22NO55A2P": image573,
    "SE-IN-XE-IPS5S08PO26A2U": image574,
    "SE-IN-XE-IPS5S15NO26A2U": image575,
    "SE-IN-XE-IPS8N2NO45A2P": image576,
    "SE-IN-XE-IPS8N4NO45M8": image577,
    "SE-IN-XE-IPS8N4PO45M8": image578,
    "SE-IN-XE-IPS8N6PO45M8": image579,
    "SE-IN-XE-IPS8S1PC60A8": image580,
    "SE-IN-XE-IPS8S2PO45A8": image581,
    "SE-IN-XE-IPSD3S1PO26A2U": image582,
    "SE-IN-XE-IPSD6N4NO45A2P": image583,
    "SE-IN-XE-IPSD6N4PO45A2P": image584,
    "SE-IN-XE-IPSD6N4PO45M8": image585,
    "SE-IN-XE-IPSD6N6PO45M8": image586,
    "SE-IN-XE-IPSD6S3NO30A2P": image587,
    "SE-IN-XE-IPSD6S3PO45M8": image588,
    "SE-LE-CA-CLD2EA1C230": image589,
    "SE-LE-CA-CLE1K": image590,
    "SE-LE-CA-CLE2K": image591,
    "SE-LE-CA-CLH5": image592,
    "SE-LE-CA-CLP2EA1C230": image593,
    "SE-LE-CA-CLP2EA1CM24": image594,
    "SE-LE-CA-SL150048": image595,
    "SE-LE-CA-UA18CAD09NKTI": image596,
    "SE-LE-CA-UA18CLD05AKM1TR": image597,
    "SE-LE-CA-UA18CLD06POM1": image598,
    "SE-LE-CA-UA30CAD35PKM1T1": image599,
    "SE-LE-CA-UA30CLD15FGM7": image600,
    "SE-LE-CA-UA30CLD35AKM1T1": image601,
    "SE-LE-CA-UA30CLD35AKM1TR": image602,
    "SE-LE-CA-VNI1": image603,
    "SE-LE-CA-VP01EP": image604,
    "SE-LE-CA-VP02E": image605,
    "SE-LE-CA-VP02EP": image606,
    "SE-LE-CA-VP02EPM1339": image607,
    "SE-LE-CA-VP03EP": image608,
    "SE-LE-CA-VP04EP": image609,
    "SE-LE-CA-VPA1MNA": image610,
    "SE-LE-CA-VPA1MPA": image611,
    "SE-LE-CA-VPA1MPA1": image612,
    "SE-LE-CA-VPA2MPA": image613,
    "SE-LE-CA-VPA2MPA1": image614,
    "SE-LE-CA-VPP310": image615,
    "SE-LE-CA-VTI4": image616,
    "SE-LE-IN-VMT16M": image617,
    "SE-LE-MD-UT2FG60ESY": image618,
    "SE-LE-MI-DBK4EMPFM123BEEM18": image619,
    "SE-LE-TA-US1AH": image620,
    "SE-MA-CA-ILMM590": image621,
    "SE-MA-CA-ILMM5S2": image622,
    "SE-MA-CA-ILMPU5": image623,
    "SE-MA-CA-ILSP8": image624,
    "SE-MA-CA-ILU2": image625,
    "SE-MO-BL-BT31FC": image626,
    "SE-MO-BL-BT31MT": image627,
    "SE-MO-BL-BT31W": image628,
    "SE-MO-IN-LA31C": image629,
    "SE-MO-IN-LA31M1": image630,
    "SE-MO-IN-LA31MT": image631,
    "SE-MO-IN-LA31W": image632,
    "SE-MO-PH-LRM107110": image633,
    "SE-MO-TA-MS100E": image634,
    "SE-PH-AU-BRQP400DDTAP": image635,
    "SE-PH-BA-O300YGR11144059": image636,
    "SE-PH-BA-QAL50IPQ": image637,
    "SE-PH-BA-QS18VN6D": image638,
    "SE-PH-BA-QS30LD": image639,
    "SE-PH-BT-BU06LN": image640,
    "SE-PH-CA-E01804NPAS": image641,
    "SE-PH-CA-E01804PPAS": image642,
    "SE-PH-CA-ED5502PPAP1": image643,
    "SE-PH-CA-ED5506PPAP1": image644,
    "SE-PH-CA-EO1804PPAS1": image645,
    "SE-PH-CA-EP1820PPAS": image646,
    "SE-PH-CA-EP1820PPAS1": image647,
    "SE-PH-CA-ER1830NPAS1": image648,
    "SE-PH-CA-ER1830PPAS1": image649,
    "SE-PH-CA-LD30CNBI10BPA2IO": image650,
    "SE-PH-CA-LD30CNBI10BPM5IO": image651,
    "SE-PH-CA-LD30ETBI10BPM5IO": image652,
    "SE-PH-CA-MOFR": image653,
    "SE-PH-CA-MOFT20": image654,
    "SE-PH-CA-MPF1912RS": image655,
    "SE-PH-CA-MPF1912RSA": image656,
    "SE-PH-CA-MPF3912RSA": image657,
    "SE-PH-CA-MPFR4": image658,
    "SE-PH-CA-MPFT154": image659,
    "SE-PH-CA-PA12BNT20": image660,
    "SE-PH-CA-PA12BNT20PO": image661,
    "SE-PH-CA-PA15IPPA": image662,
    "SE-PH-CA-PA18ALD04TOM6SA": image663,
    "SE-PH-CA-PA18CAB20NASA": image664,
    "SE-PH-CA-PA18CAD04NAWS5M": image665,
    "SE-PH-CA-PA18CAD04PAM1WS": image666,
    "SE-PH-CA-PA18CAD04PAWS": image667,
    "SE-PH-CA-PA18CAD04PAWS5M": image668,
    "SE-PH-CA-PA18CAD10PAM1SA": image669,
    "SE-PH-CA-PA18CAD10PASA": image670,
    "SE-PH-CA-PA18CAP50PASA": image671,
    "SE-PH-CA-PA18CAR65PASA": image672,
    "SE-PH-CA-PA18CAT20M1": image673,
    "SE-PH-CA-PA18CAT20NAM1SA": image674,
    "SE-PH-CA-PA18CAT20PAM1SA": image675,
    "SE-PH-CA-PA18CLD04TCSA": image676,
    "SE-PH-CA-PA18CLD04TOM6SA": image677,
    "SE-PH-CA-PA18CLD04TOSA": image678,
    "SE-PH-CA-PA18CLP20TC": image679,
    "SE-PH-CA-PA18CLR30TC": image680,
    "SE-PH-CA-PA18CLR30TO": image681,
    "SE-PH-CA-PA18CRP40PAM1SA": image682,
    "SE-PH-CA-PA18CRR50PAM1SA": image683,
    "SE-PH-CA-PA18CSD01PA": image684,
    "SE-PH-CA-PA18CSD04NASA": image685,
    "SE-PH-CA-PA18CSD04PASA5M": image686,
    "SE-PH-CA-PA18CSP20NA": image687,
    "SE-PH-CA-PA18CSP20PAM1": image688,
    "SE-PH-CA-PC50CDN10RP": image689,
    "SE-PH-CA-PC50CND10BAM1": image690,
    "SE-PH-CA-PC50CND10RP": image691,
    "SE-PH-CA-PC50CND20BA": image692,
    "SE-PH-CA-PC50CND20RP": image693,
    "SE-PH-CA-PC50CNP06BAM1": image694,
    "SE-PH-CA-PC50CNR10BAM1": image695,
    "SE-PH-CA-PC50CNR10RP": image696,
    "SE-PH-CA-PC50CNT20B": image697,
    "SE-PH-CA-PC50CNT20BA": image698,
    "SE-PH-CA-PC50CNT20BAM1": image699,
    "SE-PH-CA-PC50CNT20BM1": image700,
    "SE-PH-CA-PD30CNB15NPM5RT": image701,
    "SE-PH-CA-PD30CNB15NPRT": image702,
    "SE-PH-CA-PD30CNB15PPRT": image703,
    "SE-PH-CA-PD30CNB20NASA": image704,
    "SE-PH-CA-PD30CNB20PASA": image705,
    "SE-PH-CA-PD30CNB25NAM5PS": image706,
    "SE-PH-CA-PD30CND10NPM5DU": image707,
    "SE-PH-CA-PD30CND10NPRT": image708,
    "SE-PH-CA-PD30CND10PAM1SA": image709,
    "SE-PH-CA-PD30CND10PAM5SA": image710,
    "SE-PH-CA-PD30CND10PASA": image711,
    "SE-PH-CA-PD30CND10PP": image712,
    "SE-PH-CA-PD30CND10PPDU": image713,
    "SE-PH-CA-PD30CND10PPM5DU": image714,
    "SE-PH-CA-PD30CND10PPRT": image715,
    "SE-PH-CA-PD30CNG02NPRT": image716,
    "SE-PH-CA-PD30CNP06PP": image717,
    "SE-PH-CA-PD30CNP06PPM5DU": image718,
    "SE-PH-CA-PD30CNP60PASA": image719,
    "SE-PH-CA-PD30CTBR20BPA2IO": image720,
    "SE-PH-CA-PD30CTDR10BPA2IO": image721,
    "SE-PH-CA-PD30ETBR35BPA2IO": image722,
    "SE-PH-CA-PD86CAP12QPTF": image723,
    "SE-PH-CA-PH18CNP50PAM1SA": image724,
    "SE-PH-CA-PH18CNT20M1": image725,
    "SE-PH-CA-PH18CNT20PAM1SA": image726,
    "SE-PH-CA-PMD8RGT": image727,
    "SE-PH-CA-PMP12RG": image728,
    "SE-PH-CA-PMR10RGT": image729,
    "SE-PH-CA-PMT20G": image730,
    "SE-PH-CA-PMT20RG": image731,
    "SE-PH-DA-S10MA5CO1PL": image732,
    "SE-PH-DA-S55D1530": image733,
    "SE-PH-DA-S5NPA2E01PP": image734,
    "SE-PH-EM-LBX100": image735,
    "SE-PH-FO-SU02XP": image736,
    "SE-PH-IF-IFMOJ5148": image737,
    "SE-PH-IN-FQ05D2": image738,
    "SE-PH-IP-PT65002H": image739,
    "SE-PH-IP-PT730520": image740,
    "SE-PH-OM-E3FBRP112M": image741,
    "SE-PH-OM-E3ZMV81": image742,
    "SE-PH-OP-BGS2V100CP": image743,
    "SE-PH-OP-BGS2V30": image744,
    "SE-PH-OP-BGS2V30CP": image745,
    "SE-PH-OP-BGSDL10TPE": image746,
    "SE-PH-OP-BGSHLM25T": image747,
    "SE-PH-OP-BGSZ30N": image748,
    "SE-PH-OP-BGSZM30CP4": image749,
    "SE-PH-OP-BRFCHP": image750,
    "SE-PH-OP-BRFN": image751,
    "SE-PH-OP-BRFP": image752,
    "SE-PH-OP-C2DM11CN": image753,
    "SE-PH-OP-C2DM11N": image754,
    "SE-PH-OP-C2DP11P": image755,
    "SE-PH-OP-C2DP40CP": image756,
    "SE-PH-OP-C2DP40P": image757,
    "SE-PH-OP-C2TP2000CP": image758,
    "SE-PH-OP-C2TP2000N": image759,
    "SE-PH-OP-CD2235VM12": image760,
    "SE-PH-OP-CD33250PA": image761,
    "SE-PH-OP-CD3350PA": image762,
    "SE-PH-OP-CVSE1P20RA": image763,
    "SE-PH-OP-D3RFTN": image764,
    "SE-PH-OP-D3RFTSN": image765,
    "SE-PH-OP-DM18TN": image766,
    "SE-PH-OP-DM18TP": image767,
    "SE-PH-OP-JDSW08P": image768,
    "SE-PH-OP-JTS1000N": image769,
    "SE-PH-OP-NFDB01": image770,
    "SE-PH-OP-NFDF07": image771,
    "SE-PH-OP-NFTM02": image772,
    "SE-PH-OP-SRQ50PW": image773,
    "SE-PH-OP-TOF3V2000P": image774,
    "SE-PH-OP-TOF3V300P": image775,
    "SE-PH-OP-V2R1200": image776,
    "SE-PH-OP-V2R1200CDPPNP": image777,
    "SE-PH-OP-V4T7000P": image778,
    "SE-PH-OP-VD300T": image779,
    "SE-PH-OP-VR1000": image780,
    "SE-PH-OP-Z2D80P": image781,
    "SE-PH-OP-Z2T2000P": image782,
    "SE-PH-OP-Z3D100P": image783,
    "SE-PH-OP-Z3TD1417H": image784,
    "SE-PH-OP-ZR350P": image785,
    "SE-PH-OP-ZRL1000P": image786,
    "SE-PH-OP-ZRQX200P": image787,
    "SE-PH-PA-CX412": image788,
    "SE-PH-PA-CX442": image789,
    "SE-PH-PA-CX442P": image790,
    "SE-PH-PA-CX442PZ": image791,
    "SE-PH-PA-CX444": image792,
    "SE-PH-PA-CX444P": image793,
    "SE-PH-PA-CX481": image794,
    "SE-PH-PA-CX481P": image795,
    "SE-PH-PA-CX491": image796,
    "SE-PH-PA-CX491P": image797,
    "SE-PH-PA-CX493": image798,
    "SE-PH-PA-EXL211": image799,
    "SE-PH-PA-HLG103AC5": image800,
    "SE-PH-PA-LX101P": image801,
    "SE-PH-PA-LX101Z": image802,
    "SE-PH-PA-PMK45P": image803,
    "SE-PH-PA-PML25": image804,
    "SE-PH-PA-PML45": image805,
    "SE-PH-PA-PMU25": image806,
    "SE-PH-PA-PMY65": image807,
    "SE-PH-PE-RL31542573C136": image808,
    "SE-PH-SE-FOP03PNSCV8": image809,
    "SE-PH-SE-OCV18DOPNORC5": image810,
    "SE-PH-SE-OCV81CPNORMC5": image811,
    "SE-PH-SE-OCV84CPSC": image812,
    "SE-PH-SE-OLC18DP2": image813,
    "SE-PH-SE-OLC18FP2": image814,
    "SE-PH-SI-WTB4S3N1361": image815,
    "SE-PH-TA-ASU30": image816,
    "SE-PH-TA-DAS40R": image817,
    "SE-PH-TA-DLNS10RV": image818,
    "SE-PH-TA-DLNS15RMV": image819,
    "SE-PH-TA-DLNS3RV": image820,
    "SE-PH-TA-DLNS4RV": image821,
    "SE-PH-TA-DLNS4RVP": image822,
    "SE-PH-TA-DLNS4V": image823,
    "SE-PH-TA-DLS100P": image824,
    "SE-PH-TA-DLS100R": image825,
    "SE-PH-TA-DLS100RY5": image826,
    "SE-PH-TA-DLS200P": image827,
    "SE-PH-TA-DLS202R": image828,
    "SE-PH-TA-DLS5R": image829,
    "SE-PH-TA-ESNT16PN": image830,
    "SE-PH-TA-F80R": image831,
    "SE-PH-TA-GAMT1RPNJ": image832,
    "SE-PH-TA-GR02SPNJ": image833,
    "SE-PH-TA-GR12GN": image834,
    "SE-PH-TA-GT205": image835,
    "SE-PH-TA-GT3RSN": image836,
    "SE-PH-TA-GTL3RSN": image837,
    "SE-PH-TA-GTL7SN": image838,
    "SE-PH-TA-GTR7SPN": image839,
    "SE-PH-TA-HD301N": image840,
    "SE-PH-TA-HDA300A": image841,
    "SE-PH-TA-LDM10R": image842,
    "SE-PH-TA-LDS20RPN": image843,
    "SE-PH-TA-NAT20RF": image844,
    "SE-PH-TA-NER10DDC": image845,
    "SE-PH-TA-SSPS204R": image846,
    "SE-PH-TA-UM2T15DTP": image847,
    "SE-PH-TA-UMTL50S": image848,
    "SE-PH-TA-UMTR15DT": image849,
    "SE-PH-TA-UMTR50DS": image850,
    "SE-PH-TA-UMZ3SV": image851,
    "SE-PH-TA-USAS1AN": image852,
    "SE-PH-TA-UXR5V": image853,
    "SE-PH-TA-UXR5VPN": image854,
    "SE-PH-TA-UXT50DS": image855,
    "SE-PH-TA-UXT50DSPN": image856,
    "SE-PH-WE-OY1TA603P0003": image857,
    "SE-RI-SE-B01AN100NO": image858,
    "SE-RI-SE-B01AN100NOC5": image859,
    "SE-RI-SE-B01AN10NCV6": image860,
    "SE-RI-SE-B01AN10NO": image861,
    "SE-RI-SE-B01AN10NOV6": image862,
    "SE-RI-SE-B01AN10PO": image863,
    "SE-RI-SE-B01AN10POV6": image864,
    "SE-RI-SE-B01AN15NOC5": image865,
    "SE-RI-SE-B01AN15PO": image866,
    "SE-RI-SE-B01AN22NO": image867,
    "SE-RI-SE-B01AN22NOC5": image868,
    "SE-RI-SE-B01AN22NOV6": image869,
    "SE-RI-SE-B01AN22PO": image870,
    "SE-RI-SE-B01AN22POV6SP62": image871,
    "SE-RI-SE-B01AN30NOV6": image872,
    "SE-RI-SE-B01AN30POV6": image873,
    "SE-RI-SE-B01AN3NO": image874,
    "SE-RI-SE-B01AN3PO": image875,
    "SE-RI-SE-B01AN44NO": image876,
    "SE-RI-SE-B01AN44PO": image877,
    "SE-RI-SE-B01AN44PSC": image878,
    "SE-RI-SE-B01AN5NO": image879,
    "SE-RI-SE-B01AN5NOV6": image880,
    "SE-RI-SE-B01AN5PO": image881,
    "SE-RI-SE-B01AN5POC5": image882,
    "SE-RI-SE-B01AN5POV6": image883,
    "SE-RI-SE-B01AN63NO": image884,
    "SE-RI-SE-B01AN63NOC5": image885,
    "SE-RI-SE-B01AN63PO": image886,
    "SE-RI-SE-B01AN63POC5": image887,
    "SE-TE-CA-PT100180410MS150": image888,
    "SE-TE-CA-PT10018042M": image889,
    "SE-TE-CA-PT10018047M": image890,
    "SE-TE-GR-TSSLGX926896": image891,
    "SE-TE-SI-PT100": image892,
    // Add more mappings as necessary
};

// Define types based on the actual structure of the data
interface ProductCategoryItem {
    Code: string;
    'MAIN-Category': string;
    'SUB-Category': string;
    BRAND: string;
    'Model number': string;
    Stock: number;
    Price: number;
    Images: string; // Add this field to match the data structure
}

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Products: React.FC = () => {
    const [brandFilter, setBrandFilter] = useState<string>(''); 
    const [mainCategoryFilter, setMainCategoryFilter] = useState<string>(''); 
    const [subCategoryFilter, setSubCategoryFilter] = useState<string>(''); 
    const [searchTerm, setSearchTerm] = useState<string>('');
    const query = useQuery();
    const navigate = useNavigate();

    useEffect(() => {
        // Get the filters from query parameters and update state
        const brand = query.get('brand') || '';
        const mainCategory = query.get('mainCategory') || '';
        const subCategory = query.get('subCategory') || '';
        const search = query.get('search') || '';

        // Set the state with the parameters
        setBrandFilter(brand.toLowerCase());
        setMainCategoryFilter(mainCategory.toLowerCase());
        setSubCategoryFilter(subCategory.toLowerCase());
        setSearchTerm(search.toLowerCase());
    }, [query]);

    const handleFilterChange = (filterSetter: React.Dispatch<React.SetStateAction<string>>, queryParam: string) => (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        filterSetter(value.toLowerCase());

        const searchParams = new URLSearchParams(query.toString());
        searchParams.set(queryParam, value);
        navigate(`/products?${searchParams.toString()}`);
    };

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = () => {
        const searchParams = new URLSearchParams(query.toString());
        if (searchTerm) {
            searchParams.set('search', searchTerm);
        } else {
            searchParams.delete('search');
        }
        navigate(`/products?${searchParams.toString()}`);
    };

    const handleClearFilters = () => {
        setBrandFilter('');
        setMainCategoryFilter('');
        setSubCategoryFilter('');
        setSearchTerm('');
        navigate('/products');
    };

    const filteredProducts = (filterData as ProductCategoryItem[]).filter(product => {
        return (
            (!brandFilter || product.BRAND.toLowerCase() === brandFilter) &&
            (!mainCategoryFilter || product['MAIN-Category'].toLowerCase() === mainCategoryFilter) &&
            (!subCategoryFilter || product['SUB-Category'].toLowerCase() === subCategoryFilter) &&
            (!searchTerm || product['Model number'].toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const uniqueBrands = [...new Set(filterData.map(product => product.BRAND))];
    const uniqueMainCategories = [...new Set(filterData.map(product => product['MAIN-Category']))];
    const uniqueSubCategories = [...new Set(filterData.map(product => product['SUB-Category']))];

    return (
        <div className='product-main'>
            <h1 className='product-header'>All Products</h1>

            <div className='product-section'>
                <div className='product-count'>
                    <span>Showing {filteredProducts.length} of {filterData.length} results</span>
                </div>
                <div className='product-filter'>
                    <div>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setBrandFilter, 'brand')}
                            value={brandFilter} // Ensure value is bound to state
                        >
                            <option value=''>All Brands</option>
                            {uniqueBrands.map((brand, index) => (
                                <option key={index} value={brand.toLowerCase()}>{brand}</option>
                            ))}
                        </select>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setMainCategoryFilter, 'mainCategory')}
                            value={mainCategoryFilter} // Ensure value is bound to state
                        >
                            <option value=''>All Categories</option>
                            {uniqueMainCategories.map((category, index) => (
                                <option key={index} value={category.toLowerCase()}>{category}</option>
                            ))}
                        </select>
                        <select
                            className='filter-dropdown'
                            onChange={handleFilterChange(setSubCategoryFilter, 'subCategory')}
                            value={subCategoryFilter} // Ensure value is bound to state
                        >
                            <option value=''>All Subcategories</option>
                            {uniqueSubCategories.map((subcategory, index) => (
                                <option key={index} value={subcategory.toLowerCase()}>{subcategory}</option>
                            ))}
                        </select>
                    </div>
                    <button className='clear-btn' onClick={handleClearFilters}>Clear filters</button>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleSearchInputChange}
                    />
                    <button type="button" className="search-btn" onClick={handleSearchSubmit}>Search</button>
                </div>
            </div>

            <div className='product-list'>
            {filteredProducts.map((product) => {
                    // Attempt to find the image in the images mapping
                    const imagePath = (images as Record<string, string>)[product.Code] || defaultImage;


                    return (
                        <ProductCard
                            key={product.Code}
                            productName={product['Model number']}
                            productDescription={product.BRAND} // Assuming a simple description here
                            price={product.Price.toString()} // Convert number to string
                            image={imagePath} // Use product-specific image or default image
                            id={product.Code}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Products;
