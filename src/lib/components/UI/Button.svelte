<button class="my-button" type="submit">
	<slot />
</button>

<style>
	.my-button {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		width: 13rem;
		position: relative;
		padding: 10px 20px;
		background: #e0aeb5;
		font-size: 20px;
		border-top-right-radius: 10px;
		border-bottom-left-radius: 10px;
		transition: all 1s;
	}
	.my-button:after,
	.my-button:before {
		content: ' ';
		width: 10px;
		height: 10px;
		position: absolute;
		border: 0px solid #fff;
		transition: all 1s;
	}
	.my-button:after {
		top: -1px;
		left: -1px;
		border-top: 3px solid black;
		border-left: 3px solid black;
	}
	.my-button:before {
		bottom: -1px;
		right: -1px;
		border-bottom: 3px solid black;
		border-right: 3px solid black;
	}
	.my-button:hover {
		border-top-right-radius: 0px;
		border-bottom-left-radius: 0px;
	}
	.my-button:hover:before,
	.my-button:hover:after {
		width: 100%;
		height: 100%;
	}
</style>
