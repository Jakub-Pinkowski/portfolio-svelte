<script lang="ts">
</script>

<div class="my-24 ml-8 md:ml-24">
	<h3 class="text-3xl uppercase text-main">Portfolio</h3>
	<div class="my-8 flex w-full">
		<div class="w-1/2">
			<h4 class="my-4 text-2xl text-darkGray">Business websites</h4>
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title my-2">Website 1</h2>
					<p class="my-2">Website for auto repair shop</p>
					<div class="card-actions my-4 justify-end">
						<button class="test">Visit Website</button>
					</div>
				</div>
			</div>
		</div>
		<div class="w-1/2">
			<h4 class=" my-4 text-2xl text-darkGray">Fullstack projects</h4>
			<div class="card w-96 bg-base-100 shadow-xl">
				<figure>
					<img
						src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
						alt="Shoes"
					/>
				</figure>
				<div class="card-body">
					<h2 class="card-title my-2">Website 1</h2>
					<p class="my-2">Website for auto repair shop</p>
					<div class="card-actions my-4 flex w-full place-content-between">
						<button class="test w-2/5">Visit Website</button>
						<button class="test w-2/5">View Code</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.test {
		cursor: pointer;
		position: relative;
		padding: 10px 20px;
		background: #e0aeb5;
		font-size: 24px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: all 1s;
	}
	.test:after,
	.test:before {
		content: ' ';
		width: 10px;
		height: 10px;
		position: absolute;
		border: 0px solid #fff;
		transition: all 1s;
	}
	.test:after {
		top: -1px;
		left: -1px;
		border-top: 3px solid black;
		border-left: 3px solid black;
	}
	.test:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 3px solid black;
		border-right: 3px solid black;
	}
	.test:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.test:hover:before,
	.test:hover:after {
		width: 100%;
		height: 100%;
	}
</style>
