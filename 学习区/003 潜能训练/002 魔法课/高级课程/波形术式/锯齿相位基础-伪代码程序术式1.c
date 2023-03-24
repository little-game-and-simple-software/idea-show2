float block[64];
float phase = 0;
int sample;
while(1){
	fillblock();
}
void fillblock()
{
	sample = 63;
	while(sample--){
		block[sample] = phase;
		phase = phase + 0.01;  译者注释：起能量
		if(phase  0.99){
		phase = 0.0;
	}
}
}
/* 感性本质： */
/*
这里，可以用于魔法教学用途，左手向下感受同时右手向上感受（循环往复）（气功）。就是这段程序的道理
*/
