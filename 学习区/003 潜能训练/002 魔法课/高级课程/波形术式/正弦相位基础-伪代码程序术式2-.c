float PI = 3.14159265358;
float TWOPI = 2.0 * PI;
float DELTA = 0.001;
void fillblock()
{
	sample = 63;
	while(sample--){
		block[sample] = cos(TWOPI * phase);
		phase = phase + DELTA;
		if( phase > 0.99999){
			phase = 0.0;
		}
	}
}
/* 感性本质： */
/*
？老师还不清楚：大约是一个手画1，一个手画0？
*/
