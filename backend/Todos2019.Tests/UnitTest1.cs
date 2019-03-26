using System;
using System.Linq;
using Todos2019.Controllers;
using Xunit;

namespace Todos2019.Tests
{
    public class TodosControllerTests
    {
        [Fact]
        public void Get_Returns_List_Of_Todos()
        {
            var underTest = new TodosController();

            var result = underTest.Get();

            Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Todo()
        {
            var underTest = new TodosController();

            var result = underTest.Post("Hello World");

            Assert.True(result.Value);
        }

        [Fact(Skip = "Post should increase number of todos")]
        public void Post_Increases_Todos_Count()
        {
            var underTest = new TodosController();

            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}
