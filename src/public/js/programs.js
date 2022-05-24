let programs = document.getElementById("programs__info");

document.getElementById("programs__btn").addEventListener("click", () =>{
   let programsInfo = document.createElement("div");
   programsInfo.innerHTML= `
      <div class="d-flex justify-content-center m-5">
          <div class="card m-5 pb-5" style="max-width: 540px">
            <img src="/img/educativo.png" alt="..." class="card-img-top mx-auto d-block img-fluid" style="width: 200px">
            <div class="card-body">
              <h5 class="card-title">Instituciones educativas</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure</p>
            </div>
            <div class="mx-auto p-1">
              <a href="/contact"><button type="submit" class="btn btn-dark">Mas informacion!</button></a>
            </div>
          </div>
          <div class="card m-5 pb-5" style="max-width: 540px">
            <img src="/img/empresa.png" alt="..." class="card-img-top mx-auto d-block img-fluid" style="width: 200px">
            <div class="card-body">
              <h5 class="card-title">Empresas</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur possimus, error nobis libero magni, dolor
              repellendus similique officiis alias voluptates! Aperiam repellat ratione illo nostrum! Sed omnis dolore expedita?
              Eligendi repudiandae temporibus perspiciatis voluptatum tenetur voluptatibus blanditiis nihil hic ducimus eveniet quae
              aliquam doloribus quam ex pariatur ipsum modi minus sit, vel dolorem sequi ea est. Fuga, placeat iure.</p>
            </div>
            <div class="mx-auto p-1">
              <a href="/contact"><button type="submit" class="btn btn-dark">Mas informacion!</button></a>
            </div>
          </div>
      </div>
   `
   programs.append(programsInfo);
});


