<template>
    <div class="container">
        <div class="columns about">
            <div class="column is-two-fifths resume">
            <h1 class="title">About</h1>
            </div>
            <div class="column is-one-third">
            <p>Hello, my name is Mohamed and I'm a aspiring software developer from Toronto, ON.
               I'm currently studying computer programming at George Brown College where I help organize UW's hackathon, DubHacks.
               In my spare time i work on projects, play sports, produce music, and take photos. I can be found on GitHub and LinkedIn.</p>
               <br>
               <p>Take a look at my résumé and feel free to contact me.</p>
            </div>
        </div>
        <hr class="hrDivider">
			<div class="columns">
                <div class="column is-two-fifths resume">
				<h3>Compu-Canada Solutions</h3>
				<span class="role">Computer Technician &nbsp;|&nbsp;</span>
				<span class="date">Aug. 2015 - Now</span>
                </div>
			
			<div class="column is-one-third">
            <ul>
				<li>&diams;&nbsp; Provide solutions and guidance to clients facing technical issues and difficulties. </li>

				<li>&diams;&nbsp; Performing computer installation and operating system configuration in designated networks to suit client needs</li>

  				<li>&diams;&nbsp; Troubleshooting, analyzing and repairing various computer elements such as desktop computers, laptops and peripherals. </li>
			</ul>
            </div>
       
			</div>

            <span class="divider">&times;&times;&times;</span>

            <div class="columns">

                <div class="column is-two-fifths resume">
				<h3>Pfaff Automotive Partners</h3>
				<span class="role">Tuning Sales Associate &nbsp;|&nbsp;</span>
				<span class="date">Aug. 2012 - Aug. 2015</span>
                </div>
			
			<div class="column is-one-third">
                <ul>
				<li>&diams;&nbsp; Consulted clients on the various custom tuning options available for their luxury and exotic vehicles.</li>

				<li>&diams;&nbsp;  Met and exceeded monthly sales targets of upwards of $100k, while maintaining a 35% gross profit margin.</li>

  				<li>&diams;&nbsp; Handled the ordering, shipping and installation of performance automotive parts from vendors worldwide. </li>
			</ul>
            </div>
       
			</div>

            <span class="divider">&times;&times;&times;</span>




    </div>

</template>
<script>

export default{
    name: 'Tabs',

    components: {
    }
}
</script>
<style>

.about{
    margin-left: 200%;
}

.resume{
    margin-left: 10%;
}
h3{
    font-size:  40px;
}

.divider{
    padding: 100px;
}

.columns{
    margin: 25px 0 25px 0;
}

li{
    margin-top: 10px;
}

.hrDivider{
    width: 85%;
    margin-left: 6%;
    background-color: #7AB55C;
}
</style>