let submit = document.querySelector('#sumbit')


submit.addEventListener('click', () => {
			
						
			const previuosMens = document.querySelector('#previous_period').value; //date of previous menstruation
			const currentMens = document.querySelector('#current_period').value; //date of current menstruation
			
			document.getElementById('next_mens').value = currentMens; //value of next menstruation afeter the last one

									
			var date1 = new Date(previuosMens);
			var previous_date = date1.getTime();
			var date2 = new Date(currentMens);
			var current_date = date2.getTime();
						
			var date_diff = (current_date - previous_date);
			var seconds = (date_diff / 1000);
			var minutes = (seconds / 60);
			var hours = (minutes / 60);
			var days = (hours / 24);
			
		var cycle = document.getElementById('mCycle').innerHTML = days + " days ";
		console.log(cycle);

		document.getElementById('next_mens').stepUp(days); //date of next menstruation afeter the last one
		console.log(days)

	})
